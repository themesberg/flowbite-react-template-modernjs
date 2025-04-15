import { Outlet } from '@modern-js/runtime/router';
import { initThemeMode } from 'flowbite-react';
import './index.css';

initThemeMode();

export default function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
