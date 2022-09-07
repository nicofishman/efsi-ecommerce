import React, { FC } from 'react';

interface PromosProps {

}

const Promos: FC<PromosProps> = () => {
    return (
        <div className="relative overflow-hidden bg-white mt-2">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Llegaron tus equipos favoritos
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            Estamos en temporada de liga y tenés la posibilidad de ser dueño de los mejores equipos del mundo. ¿Te lo vas a perder?
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 bg-blue-700/90 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <img
                                                    alt="Messi"
                                                    className="h-full w-full object-cover object-center"
                                                    src="https://images.psg.media/media/209025/hero_22-23-messi.png?center=0.5,0.5&mode=crop&width=800&height=800&quality=80"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg bg-green-500/90">
                                                <img
                                                    alt="Brian Sarmiento"
                                                    className="h-full w-full object-cover object-center"
                                                    src="https://2.bp.blogspot.com/-bFYzGbGtDGU/WUVb47esEgI/AAAAAAAALuM/2iCPHF6j1I87U3N31OEroCQ8rf9DyjX5QCLcBGAs/s1600/SARMIENTO%2B2.png"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg bg-gray-300 px-2">
                                                <img
                                                    alt="Caballero"
                                                    className="h-full w-full object-cover object-center"
                                                    src="https://imgs.search.brave.com/l1TYDT7RrVbcAutFkKknUt-1yy4PrHh0IqqretqyHvo/rs:fit:576:1200:1/g:ce/aHR0cHM6Ly93d3cu/Zm9vdHlyZW5kZXJz/LmNvbS9yZW5kZXIv/V2lsbHktQ2FiYWxs/ZXJvLU1hbi4tQ2l0/eS5wbmc"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt="Centurión"
                                                    className="h-full w-full object-cover object-center"
                                                    src="https://imgs.search.brave.com/uzUNKcw1iBRgEYqMnd60oTubBODN-F4gtK7Qh9N-fHE/rs:fit:129:180:1/g:ce/aHR0cHM6Ly93d3cu/Y29yaW50aGlhbnNl/bGxlci5jby51ay9h/ZHJlbmFseW4teGwv/YXh1MTcvYXh1MTct/dWUwMDMtcmljYXJk/by1jZW50dXJpb24u/cG5n"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg bg-red-800/70">
                                                <img
                                                    alt="Junior Benitez"
                                                    className="h-full w-full object-cover object-center"
                                                    src="https://imgs.search.brave.com/vQLz9BpnTCnsS5QWRPtwilWZTm78kM-Om9_n6jonGSo/rs:fit:654:1200:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tNkQ2Y2o4TTV6/c00vVThnV3IyaE9w/MEkvQUFBQUFBQUFK/WEEvS19RQ29zUUwy/d3MvczE2MDAvSnVu/aW9yK0Jlbml0ZXou/cG5n"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg px-2 bg-gray-200">
                                                <img
                                                    alt="Teo gutierrez"
                                                    className="h-full w-full object-cover object-center"
                                                    src="https://imgs.search.brave.com/7SScBiJt7PE7ZIVpCS_kzRQgBxuT8TGD-kQLvTNDve0/rs:fit:868:1200:1/g:ce/aHR0cDovL2Zvb3R5/cmVuZGVycy5jb20v/cmVuZGVyL1Rlby1H/dXRpZXJyZXotUml2/ZXItUGxhdGUucG5n"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt="Villa Pes"
                                                    className="h-full w-full object-cover object-center"
                                                    src="https://imgs.search.brave.com/YaJFNZMs98Nx9CRlt0qGjeyKPdNpgOZg7blmgHCGpmI/rs:fit:646:726:1/g:ce/aHR0cHM6Ly8yLmJw/LmJsb2dzcG90LmNv/bS8tUmh2Qk5pY3Ra/MkEvV196UGRYcmcx/dUkvQUFBQUFBQUFK/UzAvNHFSOFNYYS1q/cXNoRDlaSWNDRXFh/STlEMXZFblR4WmVn/Q0xjQkdBcy9zMTYw/MC80NjY4NDQ0Ml8y/MDUxODc4Nzc1MTAz/NjA3XzE1Nzc2MDIx/OTcxODM1Mjg5NjBf/bi5wbmc"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a
                                className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                                href="#"
                            >
                                Comprar ahora
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promos;
