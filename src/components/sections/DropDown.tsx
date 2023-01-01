import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';

const DropDown = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState('pedro');

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className='IconButton' aria-label='Customise options'>
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className='DropdownMenuContent' sideOffset={5}>
          <DropdownMenu.Item className='DropdownMenuItem'>
            Home
          </DropdownMenu.Item>
          <DropdownMenu.Item className='DropdownMenuItem'>
            Template
          </DropdownMenu.Item>
          <DropdownMenu.Item className='DropdownMenuItem'>
            Price
          </DropdownMenu.Item>
          <DropdownMenu.Item className='DropdownMenuItem'>
            Help
          </DropdownMenu.Item>
          {/* <DropdownMenu.Item className='DropdownMenuItem'>
            <button
              className='text-[#0E6FFF] border-[#8899AA] p-2 m-2 text-start'
              style={{
                border: '1px solid ',
              }}
            >
              Get In Touch{' '}
            </button>
          </DropdownMenu.Item> */}

          <DropdownMenu.Arrow className='DropdownMenuArrow' />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropDown;
