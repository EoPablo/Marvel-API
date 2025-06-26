"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface Comic {
  name: string;
}

interface Thumbnail {
  path: string;
  extension: string;
}

export interface Personagem {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  comics: {
    items: Comic[];
  };
}

interface ModalPersonagemProps {
  personagem: Personagem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalPersonagens({ personagem, isOpen, onClose }: ModalPersonagemProps) {
  if (!personagem) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Fundo preto semi-transparente */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-70"
          leave="ease-in duration-200"
          leaveFrom="opacity-70"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black" />
        </Transition.Child>

        {/* Container centralizado */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-6 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold text-red-700 mb-4"
                >
                  {personagem.name}
                </Dialog.Title>

                <div className="flex gap-6">
                  {/* Imagem */}
                  <img
                    src={`${personagem.thumbnail.path}.${personagem.thumbnail.extension}`}
                    alt={personagem.name}
                    className="w-48 rounded"
                  />

                  {/* Descrição e quadrinhos */}
                  <div className="flex-1 flex flex-col">
                    <p className="mb-4 text-gray-700">
                      {personagem.description || "Sem descrição disponível."}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-2">Quadrinhos</h4>
                      <ul className="list-disc list-inside max-h-48 overflow-y-auto text-sm text-gray-600">
                        {personagem.comics.items.length > 0 ? (
                          personagem.comics.items.map((comic, idx) => (
                            <li key={idx}>{comic.name}</li>
                          ))
                        ) : (
                          <li>Sem quadrinhos disponíveis.</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-right">
                  <button
                    onClick={onClose}
                    className="inline-flex justify-center rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                  >
                    Fechar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
