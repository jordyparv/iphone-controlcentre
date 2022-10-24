import React from 'react';

const ExpendIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='w-6 h-6 self-end absolute right-2'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M19.5 8.25l-7.5 7.5-7.5-7.5'
    />
  </svg>
);
const ArrawRightIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='w-6 h-6'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M8.25 4.5l7.5 7.5-7.5 7.5'
    />
  </svg>
);
const items = [
  {
    name: 'Home',
    link: '#',
  },
  {
    name: 'list',
    link: '#',
    subMenu: [
      {
        name: 'item1',
        link: '#',
      },
      {
        name: 'item3',
        link: '#',
        subMenu: [
          {
            name: 'item2',
            link: '#',
          },

          {
            name: 'inneritem31',
            link: '',
            subMenu: [
              {
                name: 'inneritem32',
                link: '',
              },
              {
                name: 'inneritem32',
                link: '',
              },
              {
                name: 'inneritem32',
                link: '',
              },
              {
                name: 'inneritem32',
                link: '',
              },
              {
                name: 'inneritem32',
                link: '',
              },
              {
                name: 'inneritem32',
                link: '',
              },
              {
                name: 'inneritem32',
                link: '',
              },
              {
                name: 'inneritem32',
                link: '',
              },
              {
                name: 'inneritem32',
                link: '',
              },
              {
                name: 'inneritem32',
                link: '',
              },
              {
                name: 'inneritem32',
                link: '',
              },
              {
                name: 'inneritem32',
                link: '',
              },
            ],
          },
          {
            name: 'item2',
            link: '#',
          },
          {
            name: 'item2',
            link: '#',
          },
          {
            name: 'item2',
            link: '#',
          },
          {
            name: 'item2',
            link: '#',
          },
          {
            name: 'item2',
            link: '#',
          },
        ],
      },
      {
        name: 'item4',
        link: '#',
      },
      {
        name: 'item5',
        link: '#',
      },
      {
        name: 'item5',
        link: '#',
      },
      {
        name: 'item5',
        link: '#',
      },
      {
        name: 'item5',
        link: '#',
      },
    ],
  },
];
function MenuItems({ items }) {
  return (
    <div className='ml-20 bg-white border flex flex-col p-1 w-full absolute rounded left-28 z-10 top-12 shadow-sm transition-all'>
      {items &&
        items.map((item, key) => (
          <>
            <a
              key={key}
              className={`p-2 ${
                key === 0 ? 'border-t-0' : 'border-t'
              } hover:bg-slate-50 relative w-full flex justify-center`}
            >
              {item.name}
              {item.subMenu && <ArrawRightIcon />}
            </a>
            {item.subMenu && <MenuItems key={key} items={item.subMenu} />}
          </>
        ))}
    </div>
  );
}
function ItemsList({ items }) {
  return (
    <div className='mt-16 bg-white border flex flex-col min-w-full shadow absolute rounded left-0 z-10 top-0 transition-all'>
      {items.map((item, idx) => (
        <>
          <a
            key={idx}
            className={`p-2 ${
              idx === 0 ? 'border-t-0' : 'border-t'
            } hover:bg-slate-50 relative w-full flex justify-center`}
          >
            {item.name}
            {item.subMenu && <ArrawRightIcon />}
          </a>
          {item.subMenu && <MenuItems key={idx} items={item.subMenu} />}
        </>
      ))}
    </div>
  );
}

export default function Nav() {
  return (
    <div className='bg-white border border-gray-200 w-screen top-0 sticky h-fit flex items-center '>
      <div className='bg-blue-500 w-fit rounded-full h-fit overflow-hidden'>
        <img
          className='w-16 h-16 object-cover'
          src='https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=100'
          alt='placeholder'
        />
      </div>
      <div className='ml-8'>
        <div className='flex gap-5 relative'>
          {items.map((item, idx) => (
            <div className='relative'>
              <a
                href={item.link}
                key={idx}
                className='flex justify-center m-2 p-2 w-40 relative text-center uppercase bg-white transition-all border-b-2 border-t-2 hover:bg-gray-50 hover:border-t-orange-500 hover:border-b-green-500'
              >
                {item.name}
                {item.subMenu && <ExpendIcon />}
              </a>
              {item.subMenu && <ItemsList items={item.subMenu} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
