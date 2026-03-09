(function () {
  const CART_KEY = 'ecom_cart';

  function readCart() {
    try {
      const data = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  }

  function writeCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }

  function addToCart(item, qty) {
    const quantity = Math.max(1, Number(qty) || 1);
    const cart = readCart();
    const existing = cart.find((p) => p.id === item.id);
    if (existing) {
      existing.qty += quantity;
    } else {
      cart.push({ ...item, qty: quantity });
    }
    writeCart(cart);
    updateCartCount();
  }

  function changeCartQty(id, delta) {
    const cart = readCart()
      .map((item) =>
        item.id === id ? { ...item, qty: item.qty + delta } : item
      )
      .filter((item) => item.qty > 0);
    writeCart(cart);
    updateCartCount();
    renderCart();
  }

  function clearCart() {
    writeCart([]);
    updateCartCount();
    renderCart();
  }

  function formatMoney(value) {
    return '$' + Number(value).toFixed(2);
  }

  function updateCartCount() {
    const count = readCart().reduce((sum, item) => sum + item.qty, 0);
    document.querySelectorAll('[data-cart-count]').forEach((el) => {
      el.textContent = String(count);
      el.classList.toggle('hidden', count === 0);
    });
  }

  function renderCart() {
    const list = document.getElementById('cart-list');
    if (!list) return;

    const empty = document.getElementById('cart-empty');
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const totalEl = document.getElementById('total');

    const cart = readCart();
    list.innerHTML = '';

    if (cart.length === 0) {
      empty?.classList.remove('hidden');
      if (subtotalEl) subtotalEl.textContent = '$0.00';
      if (shippingEl) shippingEl.textContent = '$0.00';
      if (totalEl) totalEl.textContent = '$0.00';
      return;
    }

    empty?.classList.add('hidden');
    let subtotal = 0;

    cart.forEach((item) => {
      subtotal += item.price * item.qty;
      const row = document.createElement('article');
      row.className = 'flex gap-4 rounded-2xl border border-gray-200 bg-white p-4';
      row.innerHTML =
        '<img src="' + item.image + '" alt="' + item.title + '" class="h-24 w-24 rounded-xl object-cover" />' +
        '<div class="flex-1">' +
        '<h3 class="font-semibold text-gray-900">' + item.title + '</h3>' +
        '<div class="mt-2 inline-flex items-center rounded-lg border border-gray-300">' +
        '<button data-dec-id="' + item.id + '" class="px-3 py-1 text-sm text-gray-700 hover:bg-gray-100">-</button>' +
        '<span class="px-3 py-1 text-sm">' + item.qty + '</span>' +
        '<button data-inc-id="' + item.id + '" class="px-3 py-1 text-sm text-gray-700 hover:bg-gray-100">+</button>' +
        '</div>' +
        '<p class="mt-1 text-sm text-gray-500">' + formatMoney(item.price) + ' each</p>' +
        '</div>' +
        '<div class="flex flex-col items-end justify-between">' +
        '<p class="font-semibold text-gray-900">' + formatMoney(item.price * item.qty) + '</p>' +
        '<button data-remove-id="' + item.id + '" class="text-sm text-red-600 hover:text-red-700">Remove Item</button>' +
        '</div>';
      list.appendChild(row);
    });

    const shipping = subtotal > 0 ? 10 : 0;
    const total = subtotal + shipping;
    if (subtotalEl) subtotalEl.textContent = formatMoney(subtotal);
    if (shippingEl) shippingEl.textContent = formatMoney(shipping);
    if (totalEl) totalEl.textContent = formatMoney(total);

    list.querySelectorAll('[data-inc-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-inc-id');
        if (id) changeCartQty(id, 1);
      });
    });

    list.querySelectorAll('[data-dec-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-dec-id');
        if (id) changeCartQty(id, -1);
      });
    });

    list.querySelectorAll('[data-remove-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-remove-id');
        if (id) {
          const cart = readCart().filter((item) => item.id !== id);
          writeCart(cart);
          updateCartCount();
          renderCart();
        }
      });
    });
  }

  function animateAddButton(button) {
    const original = button.textContent;
    button.classList.add('scale-95');
    button.textContent = 'Added';
    setTimeout(() => {
      button.classList.remove('scale-95');
      button.textContent = original;
    }, 700);
  }

  function setupAddToCartButtons() {
    document.querySelectorAll('[data-add-to-cart]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id') || crypto.randomUUID();
        const title = btn.getAttribute('data-title') || 'Product';
        const price = Number(btn.getAttribute('data-price') || 0);
        const image = btn.getAttribute('data-image') || '';
        const qtyInputId = btn.getAttribute('data-qty-input');
        const qtyInput = qtyInputId ? document.getElementById(qtyInputId) : null;
        const qty = qtyInput ? Number(qtyInput.value) || 1 : 1;
        addToCart({ id, title, price, image }, qty);
        animateAddButton(btn);
      });
    });
  }

  function setupGallerySwitch() {
    const main = document.getElementById('product-main-image');
    if (!main) return;
    document.querySelectorAll('[data-thumb]').forEach((thumb) => {
      thumb.addEventListener('click', () => {
        const src = thumb.getAttribute('data-thumb');
        if (!src) return;
        main.src = src;
        document.querySelectorAll('[data-thumb]').forEach((t) => t.classList.remove('ring-2', 'ring-black'));
        thumb.classList.add('ring-2', 'ring-black');
      });
    });
  }

  function setupMobileMenu() {
    const btn = document.querySelector('[data-menu-toggle]');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }

  function setupStickyNav() {
    const nav = document.querySelector('[data-sticky-nav]');
    if (!nav) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        nav.classList.add('shadow-md');
      } else {
        nav.classList.remove('shadow-md');
      }
    });
  }

  function setupCartActions() {
    const clearBtn = document.getElementById('clear-cart');
    if (clearBtn) {
      clearBtn.addEventListener('click', clearCart);
    }
  }

  function setupAnimations() {
    document
      .querySelectorAll('button, a.rounded-lg, a.rounded-xl, a.rounded-full')
      .forEach((el) => {
        el.classList.add('btn-pulse');
      });

    document
      .querySelectorAll(
        'main section, main article, .grid > article, .grid > a'
      )
      .forEach((el) => {
        el.classList.add('reveal');
      });

    document
      .querySelectorAll(
        'main img.h-64, main img.h-56, #product-main-image, .hero-float'
      )
      .forEach((img) => {
        img.classList.add('float-soft');
      });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }

  function setupShopFilters() {
    const filters = document.querySelectorAll('.shop-filter[data-filter]');
    const items = document.querySelectorAll('.shop-item[data-category]');
    if (!filters.length || !items.length) return;

    filters.forEach((btn) => {
      btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-filter') || 'all';

        filters.forEach((f) => {
          f.classList.remove('font-semibold', 'text-black');
          f.classList.add('text-gray-600');
        });
        btn.classList.add('font-semibold', 'text-black');
        btn.classList.remove('text-gray-600');

        items.forEach((item) => {
          const itemCategory = item.getAttribute('data-category');
          const show = category === 'all' || category === itemCategory;
          item.classList.toggle('hidden', !show);
        });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    setupStickyNav();
    setupAddToCartButtons();
    setupGallerySwitch();
    setupCartActions();
    setupAnimations();
    setupShopFilters();
    updateCartCount();
    renderCart();
  });
})();
