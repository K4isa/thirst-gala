import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'; // Import the specific solid icon you want to use
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function TermsModal({ setTermsVisible }) {
    const [open, setOpen] = useState(true)

    const closeModal = () => {
        setOpen(false)
        setTermsVisible(false)
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel style={{borderRadius: '2rem' }} className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-6">
                                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                                    <Button
                                        className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                                        onClick={closeModal}
                                    >
                                        <span className="sr-only">Close</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </Button>
                                </div>
                                <div>
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center">
                                        <FontAwesomeIcon icon={faBell} size="3x" style={{color: "#192066"}} />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <Dialog.Title as="h3" className="text-xl font-extrabold leading-6 text-thirst-blue">
                                            TERMOS!
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm font-bold text-thirst-dark-grey">
                                                DESCRIÇÃO DOS TERMOS
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}