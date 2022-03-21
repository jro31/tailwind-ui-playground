import { Menu } from '@headlessui/react';

import useClassNames from '../../hooks/useClassNames';

const ProfileMenuItem = props => {
  const classNames = useClassNames();

  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href='#'
          className={classNames(
            active ? 'bg-gray-100' : '',
            'block px-4 py-2 text-sm text-gray-700'
          )}
        >
          {props.menuItemText}
        </a>
      )}
    </Menu.Item>
  );
};

export default ProfileMenuItem;
