document.addEventListener('DOMContentLoaded', () => {

  const yearEl = document.getElementById('currentYear');

  if (yearEl) {

    yearEl.textContent = new Date().getFullYear();

  }



  const navToggle = document.getElementById('navToggle');

  const navLinks = document.getElementById('navLinks');

  const MOBILE_NAV_BREAKPOINT = 768;



  const setNavOpen = (isOpen) => {

    if (!navToggle || !navLinks) return;



    navLinks.classList.toggle('open', isOpen);

    navToggle.classList.toggle('active', isOpen);

    navToggle.setAttribute('aria-expanded', String(isOpen));

    document.body.classList.toggle('nav-open', isOpen);

  };



  const closeNav = () => setNavOpen(false);



  if (navToggle && navLinks) {

    navToggle.addEventListener('click', () => {

      setNavOpen(!navLinks.classList.contains('open'));

    });



    navLinks.querySelectorAll('a').forEach((link) => {

      link.addEventListener('click', closeNav);

    });



    document.addEventListener('click', (e) => {

      if (

        navLinks.classList.contains('open') &&

        !navLinks.contains(e.target) &&

        !navToggle.contains(e.target)

      ) {

        closeNav();

      }

    });



    document.addEventListener('keydown', (e) => {

      if (e.key === 'Escape') closeNav();

    });



    window.addEventListener('resize', () => {

      if (window.innerWidth > MOBILE_NAV_BREAKPOINT) closeNav();

    });

  }



  const getHeaderOffset = () => {

    const header = document.querySelector('.site-header');

    return header ? header.offsetHeight : 0;

  };



  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener('click', (e) => {

      const targetId = anchor.getAttribute('href');

      if (targetId === '#') return;



      const target = document.querySelector(targetId);

      if (target) {

        e.preventDefault();

        const top = target.getBoundingClientRect().top - window.scrollY + getHeaderOffset();

        window.scrollTo({ top, behavior: 'smooth' });

      }

    });

  });



  // 联系表单提交处理

  const contactForm = document.getElementById('contactForm');

  const formFeedback = document.getElementById('formFeedback');



  if (contactForm && formFeedback) {

    contactForm.addEventListener('submit', (e) => {

      e.preventDefault();



      const name = document.getElementById('name').value.trim();

      const message = document.getElementById('message').value.trim();



      if (!name && !message) {

        formFeedback.textContent = '请填写所有必填字段。';

        formFeedback.className = 'form-feedback error';

        return;

      }



      // 模拟表单提交成功

      formFeedback.textContent = `感谢 ${name}，你的消息已收到！`;

      formFeedback.className = 'form-feedback success';

      contactForm.reset();

    });

  }



  // 项目卡片点击交互示例

  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach((card) => {

    card.addEventListener('click', () => {

      const title = card.querySelector('.project-card h3');

      if (title) {

        console.log(`查看项目: ${title.textContent}`);

      }

    });

  });

});

