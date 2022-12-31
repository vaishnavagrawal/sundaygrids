import * as Accordion from '@radix-ui/react-accordion';
import React from 'react';
import { clsx } from 'clsx';
import { faqData } from '../data/faq.data';

const FAQAccordian = () => (
  <Accordion.Root
    className='AccordionRoot'
    type='single'
    defaultValue='4'
    collapsible
  >
    {faqData.map((el, key) => (
      <Accordion.Item className='AccordionItem' value={key.toString()}>
        <AccordionTrigger>{el.title}</AccordionTrigger>
        <AccordionContent>{el.content}</AccordionContent>
      </Accordion.Item>
    ))}
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Header className='AccordionHeader'>
      <Accordion.Trigger
        className={clsx('AccordionTrigger', className)}
        {...props}
        ref={forwardedRef}
      >
        {children}

        <svg
          className='AccordionChevron'
          width='18'
          height='18'
          viewBox='0 0 28 28'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M14 0.666627C6.63996 0.666626 0.666625 6.63996 0.666625 14C0.666624 21.36 6.63996 27.3333 14 27.3333C21.36 27.3333 27.3333 21.36 27.3333 14C27.3333 6.63996 21.36 0.666628 14 0.666627ZM19.0533 13.6133L14.9466 17.72C14.4266 18.24 13.5866 18.24 13.0533 17.72L8.94662 13.6133C8.42662 13.0933 8.42662 12.24 8.94662 11.72C9.46662 11.2 10.3066 11.2 10.8266 11.72L14 14.8933L17.1733 11.72C17.6933 11.2 18.5333 11.2 19.0533 11.72C19.5733 12.24 19.5733 13.0933 19.0533 13.6133Z'
            fill='#035951'
          />
        </svg>
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Content
      className={clsx('AccordionContent', className)}
      {...props}
      ref={forwardedRef}
    >
      <div className='AccordionContentText'>{children}</div>
    </Accordion.Content>
  )
);

export default FAQAccordian;
