const API = {
  users: 'https://jsonplaceholder.typicode.com/users',
  posts: 'https://jsonplaceholder.typicode.com/posts',
  albums: 'https://jsonplaceholder.typicode.com/albums',
  photos: 'https://jsonplaceholder.typicode.com/photos',
  comments: 'https://jsonplaceholder.typicode.com/comments',
};

const state = {
  users: [],
  usersFiltered: [],
  currentUserId: null,
  postsByUser: new Map(),
  commentsByPost: new Map(),
  albumsByUser: new Map(),
  photosByAlbum: new Map(),
  likes: new Set(),
  saved: new Set(),
  userPosts: new Map(),
  postsPage: new Map(),
  pageSize: 5,
  postsSearch: '',
  savedOnly: false,
  albumsSort: 'asc',
};

async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

function $(sel, root = document) {
  return root.querySelector(sel);
}
function $all(sel, root = document) {
  return Array.from(root.querySelectorAll(sel));
}

function setVisible(id, show) {
  const el = typeof id === 'string' ? document.getElementById(id) : id;
  if (!el) return;
  el.classList.toggle('hidden', !show);
}

function nameInitials(name) {
  const parts = String(name || '').trim().split(/\s+/);
  return parts.slice(0, 2).map((s) => s[0]?.toUpperCase() || '').join('') || 'US';
}
function dummyJsonAvatar(size, text) {
  const t = encodeURIComponent(text || 'User');
  return 'https://dummyjson.com/image/' + size + 'x' + size + '/e2e8f0/0f172a?text=' + t;
}
function dummyJsonBanner(w, h, text) {
  const t = encodeURIComponent(text || 'Profile');
  return 'https://dummyjson.com/image/' + w + 'x' + h + '/dbeafe/0f172a?text=' + t;
}
function dummyJsonPhoto(w, h, text) {
  const t = encodeURIComponent(text || 'Photo');
  return 'https://dummyjson.com/image/' + w + 'x' + h + '/e5e7eb/111827?text=' + t;
}
function createAvatarImg(name, size, cls) {
  const img = new Image();
  const initials = nameInitials(name);
  img.src = dummyJsonAvatar(size, initials);
  img.alt = initials;
  img.width = size;
  img.height = size;
  img.className = cls;
  img.loading = 'lazy';
  img.onerror = () => {
    img.src = 'https://placehold.co/' + size + 'x' + size + '?text=' + initials;
  };
  return img;
}

function readLS(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}
function writeLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function loadReactions() {
  const likes = readLS('sm_likes', []);
  const saved = readLS('sm_saved', []);
  state.likes = new Set(likes);
  state.saved = new Set(saved);
}
function persistReactions() {
  writeLS('sm_likes', Array.from(state.likes));
  writeLS('sm_saved', Array.from(state.saved));
}
function loadUserPosts() {
  const all = readLS('sm_user_posts', {});
  state.userPosts = new Map(Object.entries(all).map(([k, v]) => [Number(k), v]));
}
function persistUserPosts() {
  const obj = {};
  state.userPosts.forEach((arr, k) => (obj[k] = arr));
  writeLS('sm_user_posts', obj);
}

function createUserListItem(user) {
  const li = document.createElement('li');
  const btn = document.createElement('button');
  btn.className = 'flex w-full items-center gap-3 rounded-lg border border-emerald-100 px-3 py-2 text-left hover:bg-emerald-50';
  const avatar = createAvatarImg(user.name, 28, 'h-7 w-7 rounded-full object-cover');
  const wrapper = document.createElement('div');
  wrapper.innerHTML =
    '<span class="block font-medium">' + user.name + '</span>' +
    '<span class="block text-xs text-stone-600">' + user.email + '</span>';
  btn.appendChild(avatar);
  btn.appendChild(wrapper);
  btn.addEventListener('click', () => openProfile(user.id));
  li.appendChild(btn);
  return li;
}

function createUserCard(user) {
  const card = document.createElement('article');
  card.className = 'rounded-2xl border border-emerald-100 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md';
  const banner = new Image();
  banner.src = dummyJsonBanner(600, 140, user.company?.name || user.username || user.name);
  banner.alt = 'Banner';
  banner.loading = 'lazy';
  banner.className = 'mb-3 h-32 w-full rounded-lg object-cover';
  banner.onerror = () => {
    banner.src = 'https://placehold.co/600x140?text=' + encodeURIComponent(user.company?.name || user.username || user.name);
  };
  const top = document.createElement('div');
  top.className = 'flex items-center gap-3';
  const avatar = createAvatarImg(user.name, 44, 'h-11 w-11 rounded-full object-cover');
  const titleWrap = document.createElement('div');
  titleWrap.innerHTML =
    '<h3 class="font-semibold">' + user.name + '</h3>' +
    '<p class="mt-1 text-sm text-stone-600">' + user.email + '</p>' +
    '<p class="text-sm text-stone-600">' + user.company.name + '</p>';
  top.appendChild(avatar);
  top.appendChild(titleWrap);
  const btn = document.createElement('button');
  btn.className = 'mt-3 w-full rounded-lg bg-emerald-700 py-2 text-sm font-medium text-white hover:bg-emerald-800';
  btn.textContent = 'View Profile';
  btn.addEventListener('click', () => openProfile(user.id));
  card.appendChild(banner);
  card.appendChild(top);
  card.appendChild(btn);
  return card;
}

function renderUsers(list) {
  const listEl = document.getElementById('users-list');
  const gridEl = document.getElementById('users-grid');
  const emptyEl = document.getElementById('users-empty');
  listEl.innerHTML = '';
  gridEl.innerHTML = '';
  const items = list.map(createUserListItem);
  items.forEach((li) => listEl.appendChild(li));
  const cards = list.map(createUserCard);
  cards.forEach((c) => gridEl.appendChild(c));
  setVisible(emptyEl, list.length === 0);
}

function filterUsers(term) {
  const q = String(term || '').toLowerCase().trim();
  state.usersFiltered = state.users.filter(
    (u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.company.name.toLowerCase().includes(q)
  );
  renderUsers(state.usersFiltered);
}

function showUsersPage() {
  setVisible('users-page', true);
  setVisible('profile-page', false);
}

function showProfilePage() {
  setVisible('users-page', false);
  setVisible('profile-page', true);
}

function renderProfileDetails(user) {
  $('#profile-name').textContent = user.name;
  const d = $('#profile-details');
  d.innerHTML = '';
  const banner = new Image();
  banner.src = dummyJsonBanner(900, 180, user.company?.name || user.username || user.name);
  banner.alt = 'Profile banner';
  banner.loading = 'lazy';
  banner.className = 'mb-4 h-40 w-full rounded-xl object-cover';
  banner.onerror = () => {
    banner.src = 'https://placehold.co/900x180?text=' + encodeURIComponent(user.company?.name || user.username || user.name);
  };
  d.appendChild(banner);
  const row = document.createElement('div');
  row.className = 'flex items-center gap-4';
  row.appendChild(createAvatarImg(user.name, 64, 'h-16 w-16 rounded-full object-cover'));
  const info = document.createElement('div');
  info.className = 'space-y-1';
  info.innerHTML =
    '<p><span class="font-medium">Username:</span> ' + user.username + '</p>' +
    '<p><span class="font-medium">Email:</span> ' + user.email + '</p>' +
    '<p><span class="font-medium">Phone:</span> ' + user.phone + '</p>' +
    '<p><span class="font-medium">Website:</span> ' + user.website + '</p>' +
    '<p><span class="font-medium">Company:</span> ' + user.company.name + '</p>' +
    '<p><span class="font-medium">Address:</span> ' + user.address.suite + ', ' + user.address.street + ', ' + user.address.city + ' ' + user.address.zipcode + '</p>';
  row.appendChild(info);
  d.appendChild(row);

  // Website card with logo
  try {
    const host = new URL(/^https?:\/\//i.test(user.website) ? user.website : 'http://' + user.website).host;
    const card = document.createElement('div');
    card.className = 'mt-4 flex items-center gap-3 rounded-xl border border-emerald-100 p-3';
    const logo = new Image();
    logo.src = 'https://logo.clearbit.com/' + host + '?size=64';
    logo.alt = host;
    logo.loading = 'lazy';
    logo.className = 'h-10 w-10 rounded object-cover';
    logo.onerror = () => {
      logo.src = dummyJsonAvatar(40, host[0]?.toUpperCase() || 'W');
    };
    const link = document.createElement('a');
    link.href = /^https?:\/\//i.test(user.website) ? user.website : 'http://' + user.website;
    link.target = '_blank';
    link.rel = 'noopener';
    link.className = 'text-sm text-emerald-800 underline';
    link.textContent = host;
    card.appendChild(logo);
    card.appendChild(link);
    d.appendChild(card);
  } catch {}
}

function postCard(post) {
  const el = document.createElement('article');
  el.className = 'rounded-2xl border border-emerald-100 bg-white p-4';
  const liked = state.likes.has(String(post.id));
  const saved = state.saved.has(String(post.id));
  // Cover image using DummyJSON with title text
  const cover = new Image();
  const shortTitle = String(post.title || '').split(/\s+/).slice(0, 4).join(' ');
  cover.src = dummyJsonBanner(800, 240, shortTitle);
  cover.alt = shortTitle || 'Post cover';
  cover.loading = 'lazy';
  cover.className = 'mb-3 h-40 w-full rounded-lg object-cover';
  cover.onerror = () => {
    cover.src = 'https://placehold.co/800x240?text=' + encodeURIComponent(shortTitle || 'Post');
  };
  el.appendChild(cover);
  const titleEl = document.createElement('h3');
  titleEl.className = 'font-semibold';
  titleEl.textContent = post.title;
  el.appendChild(titleEl);
  const bodyEl = document.createElement('p');
  bodyEl.className = 'mt-2 text-sm text-stone-700';
  bodyEl.textContent = post.body;
  el.appendChild(bodyEl);
  const actions = document.createElement('div');
  actions.className = 'mt-3 flex items-center gap-2';
  actions.innerHTML =
    '<button data-like class="rounded-lg border px-3 py-1 text-sm ' + (liked ? 'border-emerald-600 text-emerald-700' : 'border-emerald-200 hover:bg-emerald-50') + '">Like</button>' +
    '<button data-save class="rounded-lg border px-3 py-1 text-sm ' + (saved ? 'border-amber-600 text-amber-700' : 'border-emerald-200 hover:bg-emerald-50') + '">Save</button>' +
    '<button data-comments class="rounded-lg border border-emerald-200 px-3 py-1 text-sm hover:bg-emerald-50">Comments</button>';
  el.appendChild(actions);
  const commentsBox = document.createElement('div');
  commentsBox.className = 'mt-3 hidden space-y-3';
  commentsBox.setAttribute('data-comments-box', '');
  el.appendChild(commentsBox);
  el.querySelector('[data-like]').addEventListener('click', () => {
    const key = String(post.id);
    if (state.likes.has(key)) state.likes.delete(key);
    else state.likes.add(key);
    persistReactions();
    el.querySelector('[data-like]').className =
      'rounded-lg border px-3 py-1 text-sm ' + (state.likes.has(key) ? 'border-emerald-600 text-emerald-700' : 'border-emerald-200 hover:bg-emerald-50');
  });
  el.querySelector('[data-save]').addEventListener('click', () => {
    const key = String(post.id);
    if (state.saved.has(key)) state.saved.delete(key);
    else state.saved.add(key);
    persistReactions();
    el.querySelector('[data-save]').className =
      'rounded-lg border px-3 py-1 text-sm ' + (state.saved.has(key) ? 'border-amber-600 text-amber-700' : 'border-emerald-200 hover:bg-emerald-50');
  });
  el.querySelector('[data-comments]').addEventListener('click', async () => {
    const box = el.querySelector('[data-comments-box]');
    if (!box) return;
    if (!box.classList.contains('hidden')) {
      box.classList.add('hidden');
      box.innerHTML = '';
      return;
    }
    box.innerHTML = '<p class="text-sm text-stone-600">Loading comments...</p>';
    box.classList.remove('hidden');
    const comments = await loadComments(post.id);
    box.innerHTML = '';
    comments.forEach((c) => {
      const row = document.createElement('div');
      row.className = 'flex items-start gap-3 rounded-xl border border-stone-200 p-3';
      const ava = createAvatarImg(c.name || c.email, 28, 'h-7 w-7 rounded-full object-cover');
      const textWrap = document.createElement('div');
      const title = document.createElement('p');
      title.className = 'text-sm font-medium';
      title.textContent = c.name + ' ';
      const meta = document.createElement('span');
      meta.className = 'text-xs text-stone-500';
      meta.textContent = '<' + c.email + '>';
      title.appendChild(meta);
      const bodyP = document.createElement('p');
      bodyP.className = 'mt-1 text-sm text-stone-700';
      bodyP.textContent = c.body;
      textWrap.appendChild(title);
      textWrap.appendChild(bodyP);
      row.appendChild(ava);
      row.appendChild(textWrap);
      box.appendChild(row);
    });
  });
  return el;
}

function renderPostsSkeleton(container) {
  container.innerHTML =
    '<div class="animate-pulse space-y-4">' +
    '<div class="h-5 w-2/3 rounded bg-emerald-100"></div>' +
    '<div class="h-4 w-full rounded bg-emerald-50"></div>' +
    '<div class="h-4 w-4/5 rounded bg-emerald-50"></div>' +
    '</div>';
}

function applyPostsFilters(posts) {
  let res = posts;
  const q = state.postsSearch.toLowerCase().trim();
  if (q) {
    res = res.filter((p) => p.title.toLowerCase().includes(q) || p.body.toLowerCase().includes(q));
  }
  if (state.savedOnly) {
    res = res.filter((p) => state.saved.has(String(p.id)));
  }
  return res;
}

async function renderPosts(userId, { append = false } = {}) {
  const container = document.getElementById('posts-list');
  if (!append) renderPostsSkeleton(container);
  let posts = state.postsByUser.get(userId);
  if (!posts) {
    const all = await fetchJSON(API.posts + '?userId=' + userId);
    posts = all.slice(0, 10);
    state.postsByUser.set(userId, posts);
  }
  const local = state.userPosts.get(userId) || [];
  const merged = [...local, ...posts];
  const filtered = applyPostsFilters(merged);
  const page = state.postsPage.get(userId) || 1;
  const start = 0;
  const end = page * state.pageSize;
  const slice = filtered.slice(start, end);
  if (!append) container.innerHTML = '';
  slice.forEach((p) => container.appendChild(postCard(p)));
  const hasMore = end < filtered.length;
  const loadMoreBtn = document.getElementById('load-more-posts');
  loadMoreBtn.classList.toggle('hidden', !hasMore);
  loadMoreBtn.onclick = () => {
    state.postsPage.set(userId, page + 1);
    renderPosts(userId, { append: true });
  };
}

function albumCard(album) {
  const el = document.createElement('article');
  el.className = 'rounded-2xl border border-emerald-100 bg-white p-4';
  const img = new Image();
  const short = String(album.title || '').split(/\s+/).slice(0, 5).join(' ');
  img.src = dummyJsonPhoto(600, 180, short);
  img.alt = album.title || 'Album';
  img.loading = 'lazy';
  img.className = 'mb-3 h-36 w-full rounded-lg object-cover';
  img.onerror = () => {
    img.src = 'https://placehold.co/600x180?text=' + encodeURIComponent(short || 'Album');
  };
  const h3 = document.createElement('h3');
  h3.className = 'font-medium';
  h3.textContent = album.title;
  const actions = document.createElement('div');
  actions.className = 'mt-3 flex items-center gap-2';
  const btn = document.createElement('button');
  btn.className = 'rounded-lg border border-emerald-200 px-3 py-1 text-sm hover:bg-emerald-50';
  btn.textContent = 'Open Photos';
  btn.addEventListener('click', () => openAlbum(album.id, album.title));
  actions.appendChild(btn);
  el.appendChild(img);
  el.appendChild(h3);
  el.appendChild(actions);
  return el;
}

async function renderAlbums(userId) {
  const container = document.getElementById('albums-list');
  container.innerHTML =
    '<div class="animate-pulse space-y-2">' +
    '<div class="h-5 w-1/2 rounded bg-emerald-100"></div>' +
    '<div class="h-40 w-full rounded bg-emerald-50"></div>' +
    '</div>';
  let albums = state.albumsByUser.get(userId);
  if (!albums) {
    const all = await fetchJSON(API.albums + '?userId=' + userId);
    albums = all.slice(0, 12);
    state.albumsByUser.set(userId, albums);
  }
  const sorted = [...albums].sort((a, b) =>
    state.albumsSort === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
  );
  container.innerHTML = '';
  sorted.forEach((a) => container.appendChild(albumCard(a)));
}

async function loadComments(postId) {
  if (state.commentsByPost.has(postId)) return state.commentsByPost.get(postId);
  const data = await fetchJSON(API.comments + '?postId=' + postId);
  state.commentsByPost.set(postId, data);
  return data;
}

async function openAlbum(albumId, title) {
  const box = document.getElementById('lightbox');
  const boxTitle = document.getElementById('lightbox-title');
  const content = document.getElementById('lightbox-content');
  boxTitle.textContent = title || 'Album';
  content.innerHTML = '<p class="text-sm text-stone-600">Loading photos...</p>';
  setVisible(box, true);
  let photos = state.photosByAlbum.get(albumId);
  if (!photos) {
    const all = await fetchJSON(API.photos + '?albumId=' + albumId);
    photos = all.slice(0, 24);
    state.photosByAlbum.set(albumId, photos);
  }
  content.innerHTML = '';
  photos.forEach((p) => {
    const item = document.createElement('figure');
    item.className = 'overflow-hidden rounded-xl border border-stone-200';
    const title = p.title || '';
    const short = String(title).split(/\s+/).slice(0, 4).join(' ');
    const img = new Image();
    img.src = dummyJsonPhoto(300, 200, short);
    img.alt = title || 'photo';
    img.loading = 'lazy';
    img.className = 'h-40 w-full object-cover';
    img.onerror = () => {
      img.src = 'https://placehold.co/300x200?text=' + encodeURIComponent(short || 'Photo');
    };
    img.addEventListener('click', () => {
      window.open(dummyJsonPhoto(1200, 800, short), '_blank');
    });
    const caption = document.createElement('figcaption');
    caption.className = 'p-2 text-xs text-stone-600';
    caption.textContent = title || '';
    item.appendChild(img);
    item.appendChild(caption);
    content.appendChild(item);
  });
}

function openNewPostModal() {
  const modal = document.getElementById('post-modal');
  setVisible(modal, true);
}
function closeNewPostModal() {
  const modal = document.getElementById('post-modal');
  setVisible(modal, false);
  $('#post-title').value = '';
  $('#post-body').value = '';
}
function showToast(text) {
  const t = document.getElementById('toast');
  t.textContent = text;
  t.classList.remove('hidden');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => t.classList.add('hidden'), 1800);
}
function createLocalPost(userId, title, body) {
  const arr = state.userPosts.get(userId) || [];
  const post = { userId, id: 'local-' + Date.now(), title, body };
  arr.unshift(post);
  state.userPosts.set(userId, arr);
  persistUserPosts();
  showToast('Post published');
}

async function openProfile(userId) {
  state.currentUserId = userId;
  location.hash = 'user-' + userId;
  const user = state.users.find((u) => u.id === userId);
  if (!user) return;
  renderProfileDetails(user);
  showProfilePage();
  state.postsPage.set(userId, 1);
  await Promise.all([renderPosts(userId), renderAlbums(userId)]);
}

function handleHashRoute() {
  const h = location.hash.replace('#', '');
  if (!h) {
    showUsersPage();
    return;
  }
  if (h.startsWith('user-')) {
    const id = Number(h.split('-')[1]);
    const user = state.users.find((u) => u.id === id);
    if (user) openProfile(id);
  } else {
    showUsersPage();
  }
}

async function init() {
  loadReactions();
  loadUserPosts();
  $('#mobile-menu-btn').addEventListener('click', () => {
    const m = document.getElementById('mobile-menu');
    m.classList.toggle('hidden');
  });
  $('#home-btn').addEventListener('click', () => {
    location.hash = '';
    showUsersPage();
  });
  $('#home-btn-mobile').addEventListener('click', () => {
    location.hash = '';
    showUsersPage();
    document.getElementById('mobile-menu').classList.add('hidden');
  });
  $('#back-users').addEventListener('click', () => {
    location.hash = '';
    showUsersPage();
  });
  $('#lightbox-close').addEventListener('click', () => setVisible('lightbox', false));
  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') setVisible('lightbox', false);
  });
  const search = $('#global-search');
  const searchM = $('#global-search-mobile');
  search.addEventListener('input', () => filterUsers(search.value));
  searchM.addEventListener('input', () => filterUsers(searchM.value));
  $('#posts-search').addEventListener('input', () => {
    state.postsSearch = $('#posts-search').value || '';
    if (state.currentUserId) {
      state.postsPage.set(state.currentUserId, 1);
      renderPosts(state.currentUserId);
    }
  });
  $('#posts-saved-toggle').addEventListener('change', () => {
    state.savedOnly = $('#posts-saved-toggle').checked;
    if (state.currentUserId) {
      state.postsPage.set(state.currentUserId, 1);
      renderPosts(state.currentUserId);
    }
  });
  $('#new-post-btn').addEventListener('click', openNewPostModal);
  $('#post-cancel').addEventListener('click', closeNewPostModal);
  $('#post-submit').addEventListener('click', () => {
    const title = ($('#post-title').value || '').trim();
    const body = ($('#post-body').value || '').trim();
    if (!title || !body) {
      showToast('Title and body required');
      return;
    }
    if (!state.currentUserId) return;
    createLocalPost(state.currentUserId, title, body);
    closeNewPostModal();
    state.postsPage.set(state.currentUserId, 1);
    renderPosts(state.currentUserId);
  });
  $('#albums-sort').addEventListener('change', () => {
    state.albumsSort = $('#albums-sort').value;
    if (state.currentUserId) renderAlbums(state.currentUserId);
  });

  const users = await fetchJSON(API.users);
  state.users = users;
  state.usersFiltered = users;
  renderUsers(users);
  handleHashRoute();
}

window.addEventListener('hashchange', handleHashRoute);
document.addEventListener('DOMContentLoaded', init);
