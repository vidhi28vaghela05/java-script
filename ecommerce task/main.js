(function () {
  const CART_KEY = 'plant_cart';
  const SHIPPING = 10;

  const PRODUCT_CATALOG = {
    'Snake Plant': {
      price: 49,
      image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=300&q=80'
    },
    'Peace Lily': {
      price: 55,
      image: 'https://images.unsplash.com/photo-1494949360228-4e9bde560065?auto=format&fit=crop&w=300&q=80'
    },
    'Aloe Vera': {
      price: 35,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=300&q=80'
    },
    Monstera: {
      price: 69,
      image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=300&q=80'
    },
    'Monstera Deliciosa': {
      price: 69,
      image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=300&q=80'
    },
    'Fiddle Leaf Fig': {
      price: 89,
      image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=300&q=80'
    },
    'Palm Plant': {
      price: 74,
      image: 'https://images.unsplash.com/photo-1477554193778-9562c28588c0?auto=format&fit=crop&w=300&q=80'
    },
    'Cactus Set': {
      price: 39,
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=300&q=80'
    },
    'Hanging Pothos': {
      price: 44,
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=300&q=80'
    },
    'ZZ Plant': {
      price: 47,
      image: 'https://images.unsplash.com/photo-1509423350716-97f2360af9e4?auto=format&fit=crop&w=300&q=80'
    },
    'Rubber Plant': {
      price: 59,
      image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=300&q=80'
    }
  };

  function readCart() {
    try {
      const parsed = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function writeCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }

  function addItemToCart(name) {
    const itemInfo = PRODUCT_CATALOG[name] || { price: 0, image: '' };
    const cart = readCart();
    const existing = cart.find((item) => item.name === name);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        name,
        price: itemInfo.price,
        image: itemInfo.image,
        qty: 1
      });
    }

    writeCart(cart);
  }

  function removeItemFromCart(name) {
    const cart = readCart()
      .map((item) => {
        if (item.name !== name) return item;
        return { ...item, qty: item.qty - 1 };
      })
      .filter((item) => item.qty > 0);

    writeCart(cart);
    renderCartPage();
  }

  function clearCart() {
    writeCart([]);
    renderCartPage();
  }

  function formatMoney(value) {
    return '$' + value;
  }

  function renderCartPage() {
    const cartItemsEl = document.getElementById('cartItems');
    if (!cartItemsEl) return;

    const emptyEl = document.getElementById('cartEmpty');
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const totalEl = document.getElementById('total');

    const cart = readCart();
    cartItemsEl.innerHTML = '';

    if (cart.length === 0) {
      if (emptyEl) emptyEl.classList.remove('hidden');
      if (subtotalEl) subtotalEl.textContent = '$0';
      if (shippingEl) shippingEl.textContent = '$0';
      if (totalEl) totalEl.textContent = '$0';
      return;
    }

    if (emptyEl) emptyEl.classList.add('hidden');

    let subtotal = 0;

    cart.forEach((item) => {
      subtotal += item.price * item.qty;

      const article = document.createElement('article');
      article.className = 'flex gap-4 rounded-2xl bg-white p-4 ring-1 ring-emerald-100';
      article.innerHTML =
        '<img src="' + item.image + '" alt="' + item.name + '" class="h-24 w-24 rounded-xl object-cover">' +
        '<div class="flex-1">' +
        '<h3 class="font-semibold">' + item.name + '</h3>' +
        '<p class="text-sm text-stone-500">Qty: ' + item.qty + '</p>' +
        '<p class="text-sm text-stone-600">' + formatMoney(item.price) + ' each</p>' +
        '</div>' +
        '<div class="flex flex-col items-end justify-between">' +
        '<p class="font-semibold">' + formatMoney(item.price * item.qty) + '</p>' +
        '<button data-remove-item="' + item.name + '" class="text-xs text-red-600">Remove 1</button>' +
        '</div>';

      cartItemsEl.appendChild(article);
    });

    const shipping = subtotal > 0 ? SHIPPING : 0;
    const total = subtotal + shipping;

    if (subtotalEl) subtotalEl.textContent = formatMoney(subtotal);
    if (shippingEl) shippingEl.textContent = formatMoney(shipping);
    if (totalEl) totalEl.textContent = formatMoney(total);

    cartItemsEl.querySelectorAll('[data-remove-item]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const name = btn.getAttribute('data-remove-item');
        if (!name) return;
        removeItemFromCart(name);
      });
    });
  }

  document.querySelectorAll('[data-menu-btn]').forEach((btn) => {
    const targetId = btn.getAttribute('data-menu-btn');
    const menu = document.getElementById(targetId);
    if (!menu) return;

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  });

  document.querySelectorAll('.js-year').forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  document.querySelectorAll('[data-add-cart]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const itemName = btn.getAttribute('data-add-cart') || 'Item';
      addItemToCart(itemName);
      alert(itemName + ' added to cart');
    });
  });

  const clearBtn = document.getElementById('clearCartBtn');
  if (clearBtn) {
    clearBtn.addEventListener('click', clearCart);
  }

  renderCartPage();
})();
