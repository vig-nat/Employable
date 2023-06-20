import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    /* box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1); */
    .logo {
      /* max-width: 12rem; */
      max-height: 3.5rem;
    }
    .sidebar-container {
      background: var(--bgmain2);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: var(--transition);
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--grey-400);
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: var(--transition);
    }
    .nav-link:hover {
      background: var(--bgmain);
      padding-left: 3rem;
      color: var(--grey-200);
    }

    /* .nav-link:hover .icon {
      color: var(--primary-500);
    } */

    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
      transition: var(--transition);
    }
    .active {
      padding-left: 3rem;
      color: var(--white);
      background: var(--bgmain);
    }
    .active .icon {
      color: var(--primary-500);
    }
  }
`;
export default Wrapper;
