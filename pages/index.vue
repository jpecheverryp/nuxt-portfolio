<template>
    <div>
        <main class="md:grid md:grid-cols-2 md:justify-between md:my-0 md:mx-auto md:max-w-7xl">
            <div class="hero__content h-screen flex flex-col justify-center ">
                <div class="flex flex-col gap-6">
                    <h1 class="text-5xl md:text-6xl text-center uppercase font-bold md:text-left">I'm <span
                            class="text-brand">Juan</span> P Echeverry</h1>
                    <p class="text-center font-normal text-xl md:text-2xl md:text-left">Software Developer</p>
                </div>
                <div class="flex flex-wrap my-6 gap-8 gap-y-4 justify-center  md:justify-start md:mt-24">
                    <nuxt-link-button text="See my Work" address="/dev" />
                    <nuxt-link-button text="Contact me" address="/#contact" :isGhost="true" />
                </div>
            </div>
            <img class="hidden md:block hero-animation w-1/2 mt-16 mx-auto mb-0" src="~/static/svg/mobile-wireframe.svg"
                alt="">
        </main>

        <work-section heading="My Work" />

        <contact-form />
    </div>
</template>

<style>
@keyframes slideFromRight {
    0% {
        transform: translateX(50%);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

.hero-animation {
    animation: 1s ease-in-out 0s 1 slideFromRight;
    transition: .5s;
}
</style>
