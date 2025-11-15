class CustomSidebar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          width: 240px;
          background: #1a365d;
          color: white;
          z-index: 40;
        }
        .sidebar-header {
          padding: 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .sidebar-header h2 {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
          color: white;
        }
        .nav-items {
          padding: 0.75rem;
        }
        .nav-item {
          display: flex;
          align-items: center;
          padding: 0.75rem 1rem;
          border-radius: 0.375rem;
          color: rgba(255,255,255,0.8);
          margin-bottom: 0.25rem;
          transition: all 0.2s;
          text-decoration: none;
        }
        .nav-item:hover {
          background: rgba(255,255,255,0.1);
          color: white;
        }
        .nav-item.active {
          background: rgba(255,255,255,0.2);
          color: white;
        }
        .nav-icon {
          margin-right: 0.75rem;
          width: 1.25rem;
          height: 1.25rem;
        }
      </style>
      <div>
        <div class="sidebar-header">
          <h2>LIONG GARMENTS</h2>
        </div>
        <div class="nav-items">
          <a href="#" class="nav-item">
            <i data-feather="layout" class="nav-icon"></i>
            Dashboard
          </a>
          <a href="inventory.html" class="nav-item">
            <i data-feather="package" class="nav-icon"></i>
            Inventory
          </a>
          <a href="index.html" class="nav-item">
            <i data-feather="file-text" class="nav-icon"></i>
            Requests
          </a>
        </div>
      </div>
    `;
  }
}
customElements.define('custom-sidebar', CustomSidebar);