;(() => {
  const regex = /^\/([a-z]{2}(?:-[A-Z]{2})?)\//;
  const match = location.pathname.match(regex);
  let lang = 'en-US';
  if (match) {
    lang = match[1];
  }
  console.log('lang is', lang); 
  document.querySelectorAll('a').forEach((el) => {
    const href = el.getAttribute('href');
    if(lang == 'en-US') {
      href && el.setAttribute('href', href.replace(/\/zh-CN\//g, `/${lang}/`));
    } else {
      href && el.setAttribute('href', href.replace(/\/en-US\//g, `/${lang}/`));
    }
  });
})()
