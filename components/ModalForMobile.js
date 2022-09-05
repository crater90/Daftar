import React, { useState, useImperativeHandle, forwardRef } from 'react'
import { Dialog } from '@headlessui/react'
import CityPageForm from './CityPageForm';
import { XIcon } from '@heroicons/react/outline';

const ModalForMobile = forwardRef((props, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true)
    }

    useImperativeHandle(ref, () => {
        return {
            showModal: showModal
        };
    });

    return (
        <Dialog className='relative z-30' open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className='fixed inset-0 flex items-center justify-center p-4'>
                <Dialog.Panel className='w-full h-80 overflow-y-scroll max-w-sm rounded bg-white'>
                    <CityPageForm modal={setIsOpen} city={props.city} triggerAnimate={props.triggerAnimate} />
                </Dialog.Panel>
            </div>
        </Dialog>
    );
});

export default ModalForMobile;
