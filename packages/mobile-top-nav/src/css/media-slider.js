import { css } from 'lit-element';

export default () => {
  return css`
    a {
      text-decoration: none;
      color: var(--activeColor);
    }

    img {
      display: block;
      width: 90px;
      height: 90px;
      margin: 0 auto 1rem auto;
      border-radius: 45px;
    }

    ul {
      padding: 0;
      margin: 0;
      list-style: none;
    }

    li + li {
      padding-top: 1.5rem;
    }

    .information-menu {
      position: relative;
      padding: 0;
      background: var(--grey20);
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      position: relative;
      font-size: inherit;
    }

    .menu-slider-offscreen {
      transform: translate(-100%, -100%);
    }

    /* Secondary menu */
    @keyframes menu-enter {
      0% {
        transform: translate(100%, -84%);
      }
      100% {
        transform: translate(8%, -84%);
      }
    }
    @keyframes menu-exit {
      0% {
        transform: translate(8%, -84%);
      }
      100% {
        transform: translate(100%, -84%);
      }
    }
    .menu-enter {
      animation: menu-enter 0.5s forwards;
    }
    .menu-exit {
      animation: menu-exit 0.5s forwards;
    }

    .info-box {
      padding: 0 1%;
    }

    .icon-links {
      display: flex;
      align-items: flex-start;
    }

    .icon-links a {
      display: block;
      max-width: 130px;
      margin-right: 1rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  `;
}
