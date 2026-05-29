"use client";
import { useEffect, useRef } from 'react';

export default function CertificateModal() {
  const modalRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    const certFiles = {
      git: '/certificates/git-certificate.pdf',
      js: '/certificates/js-certificate.pdf',
      frontend: '/certificates/frontend-certificate.pdf',
      research: '/certificates/research-paper-certificate.pdf',
      resume: '/certificates/resume.pdf',
    };

    const openModal = (e) => {
      const link = e.target.closest('.cert-link, .nav-cert-link');
      if (!link) return;
      e.preventDefault();
      const certKey = link.dataset.cert;
      if (certFiles[certKey]) {
        iframeRef.current.src = certFiles[certKey];
        modalRef.current.classList.add('active');
        modalRef.current.setAttribute('aria-hidden', 'false');
      }
    };

    const closeModal = () => {
      modalRef.current.classList.remove('active');
      modalRef.current.setAttribute('aria-hidden', 'true');
      setTimeout(() => {
        iframeRef.current.src = '';
      }, 300);
    };

    document.addEventListener('click', openModal);
    const closeBtn = document.getElementById('closeModal');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    const overlay = modalRef.current?.querySelector('.cert-modal-overlay');
    if (overlay) overlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalRef.current?.classList.contains('active')) {
        closeModal();
      }
    });

    return () => {
      document.removeEventListener('click', openModal);
      if (closeBtn) closeBtn.removeEventListener('click', closeModal);
      if (overlay) overlay.removeEventListener('click', closeModal);
    };
  }, []);

  return (
    <div ref={modalRef} id="certModal" className="cert-modal fixed inset-0 z-[9998] invisible opacity-0 transition-all duration-300" aria-hidden="true">
      <div className="cert-modal-overlay absolute inset-0 bg-black/92 backdrop-blur-md"></div>
      <div className="cert-modal-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[900px] h-[80%] bg-surface border border-border shadow-xl flex flex-col overflow-hidden modal-reveal">
        <div className="cert-modal-header flex justify-between items-center p-4 border-b border-border">
          <span className="cert-modal-title font-mono text-[0.7rem] tracking-[0.2em] text-gold-dim">Certificate</span>
          <button id="closeModal" className="cert-modal-close bg-none border-none text-white-dim text-xl transition-colors hover:text-gold" aria-label="Close">✕</button>
        </div>
        <div className="cert-modal-body flex-1 overflow-hidden">
          <iframe ref={iframeRef} id="certIframe" className="w-full h-full border-none bg-white"></iframe>
        </div>
      </div>
    </div>
  );
}