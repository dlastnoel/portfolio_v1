<template>
  <div>
    <!-- landing page -->
    <section class="bg-landing-page bg-cover bg-center bg-no-repeat bg-gray-600 bg-blend-screen flex-col h-screen gap-3">
      <nav class="p-5">
        <div class="container m-auto pt-5 flex justify-between items-center">
          <div class="flex justify-center items-center gap-3">
            <router-link to="/" class="hidden md:block text-xl">Noel Xavier</router-link>
            <a href="https://www.facebook.com/dlastnoel" target="_blank" rel="noopener noreferrer">
              <svg class="h-7 w-7" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M255.022,511.998l0.229,0.001l-0.079,0l-0.15,-0.001Zm1.806,0.001l-0.079,0l0.229,-0.001l-0.15,0.001Zm-2.588,-0.005l0.247,0.001l-0.142,0l-0.105,-0.001Zm3.415,0.001l-0.142,0l0.247,-0.001l-0.105,0.001Zm-4.169,-0.007l0.165,0.001l-0.132,-0.001l-0.033,0Zm4.995,0l-0.132,0.001l0.165,-0.001l-0.033,0Zm0.826,-0.009l-0.058,0.001l0.223,-0.003l-0.165,0.002Zm-6.779,-0.002l0.223,0.003l-0.058,-0.001l-0.165,-0.002Zm7.604,-0.01l-0.135,0.002l0.275,-0.004l-0.14,0.002Zm-8.404,-0.002l0.275,0.004l-0.135,-0.002l-0.14,-0.002Zm9.228,-0.012l-0.182,0.003l0.254,-0.005l-0.072,0.002Zm-9.984,-0.002l0.254,0.005l-0.182,-0.003l-0.072,-0.002Zm-0.937,-0.019l0.225,0.005l-0.04,-0.001l-0.185,-0.004Zm11.745,0.004l-0.04,0.001l0.225,-0.005l-0.185,0.004Zm-12.567,-0.025l0.309,0.008l-0.125,-0.003l-0.184,-0.005Zm13.39,0.005l-0.125,0.003l0.309,-0.008l-0.184,0.005Zm0.823,-0.022l-0.201,0.006l0.316,-0.009l-0.115,0.003Zm-14.967,-0.003l0.316,0.009l-0.201,-0.006l-0.115,-0.003Zm-0.72,-0.022l0.225,0.007l-0.212,-0.007l-0.194,-0.006l0.181,0.006Zm16.509,0l-0.212,0.007l0.225,-0.007l0.181,-0.006l-0.194,0.006Zm0.821,-0.027l-0.112,0.004l0.345,-0.012l-0.233,0.008Zm-18.371,-0.008l0.345,0.012l-0.112,-0.004l-0.233,-0.008Zm-0.749,-0.028l0.362,0.013l-0.201,-0.007l-0.161,-0.006Zm19.941,0.006l-0.201,0.007l0.362,-0.013l-0.161,0.006Zm-20.676,-0.036l0.354,0.015l-0.277,-0.011l-0.077,-0.004Zm21.495,0.004l-0.277,0.011l0.354,-0.015l-0.077,0.004Zm-22.525,-0.049l0.38,0.017l-0.093,-0.003l-0.287,-0.014Zm23.345,0.014l-0.093,0.003l0.38,-0.017l-0.287,0.014Zm-24.084,-0.048l0.394,0.018l-0.186,-0.008l-0.208,-0.01Zm24.902,0.01l-0.186,0.008l0.394,-0.018l-0.208,0.01Zm-25.63,-0.047l0.397,0.02l-0.279,-0.013l-0.118,-0.007Zm26.448,0.007l-0.279,0.013l0.397,-0.02l-0.118,0.007Zm0.818,-0.043l-0.362,0.019l0.321,-0.017l0.378,-0.021l-0.337,0.019Zm-27.925,0.002l0.321,0.017l-0.362,-0.019l-0.337,-0.019l0.378,0.021Zm28.741,-0.048l-0.16,0.009l0.406,-0.023l-0.246,0.014Zm-29.844,-0.014l0.406,0.023l-0.16,-0.009l-0.246,-0.014Zm-0.722,-0.043l0.405,0.024l-0.253,-0.014l-0.152,-0.01Zm31.382,0.01l-0.253,0.014l0.405,-0.024l-0.152,0.01Zm-32.071,-0.053l0.365,0.023l-0.34,-0.021l-0.342,-0.022l0.317,0.02Zm32.887,0.002l-0.34,0.021l0.365,-0.023l0.317,-0.02l-0.342,0.022Zm0.814,-0.053l-0.122,0.008l0.387,-0.026l-0.265,0.018Zm-34.755,-0.018l0.387,0.026l-0.122,-0.008l-0.265,-0.018Zm-0.721,-0.05l0.38,0.027l-0.208,-0.014l-0.172,-0.013Zm36.29,0.013l-0.208,0.014l0.38,-0.027l-0.172,0.013Zm-37.009,-0.064l0.349,0.025l-0.271,-0.019l-0.078,-0.006Zm37.822,0.006l-0.271,0.019l0.349,-0.025l-0.078,0.006Zm-38.789,-0.079l0.306,0.023l-0.074,-0.005l-0.232,-0.018Zm39.602,0.018l-0.074,0.005l0.306,-0.023l-0.232,0.018Zm0.811,-0.063l-0.146,0.011l0.311,-0.025l-0.165,0.014Zm-41.157,-0.014l0.311,0.025l-0.146,-0.011l-0.165,-0.014Zm-0.725,-0.059l0.264,0.022l-0.186,-0.015l-0.078,-0.007Zm42.694,0.007l-0.186,0.015l0.264,-0.022l-0.078,0.007Zm-43.492,-0.074l0.079,0.007l-0.013,-0.001l-0.066,-0.006Zm44.302,0.006l-0.013,0.001l0.079,-0.007l-0.066,0.006Zm0.81,-0.071l-0.072,0.006l0.181,-0.016l-0.109,0.01Zm-45.965,-0.01l0.181,0.016l-0.072,-0.006l-0.109,-0.01Zm-0.75,-0.068l0.135,0.013l-0.084,-0.008l-0.051,-0.005Zm47.523,0.005l-0.084,0.008l0.135,-0.013l-0.051,0.005Zm-63.736,-2.025c-122.319,-19.226 -216,-125.203 -216,-252.887c0,-141.29 114.71,-256 256,-256c141.29,0 256,114.71 256,256c0,127.684 -93.681,233.661 -216,252.887l0,-178.887l59.65,0l11.35,-74l-71,0l0,-48.021c0,-20.245 9.918,-39.979 41.719,-39.979l32.281,0l0,-63c0,0 -29.296,-5 -57.305,-5c-58.476,0 -96.695,35.44 -96.695,99.6l0,56.4l-65,0l0,74l65,0l0,178.887Z"/></svg>
            </a>
            <a href="https://www.instagram.com/dlastnoel/" target="_blank" rel="noopener noreferrer">
              <svg class="h-7 w-7" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 56.7 56.7" enable-background="new 0 0 56.7 56.7" xml:space="preserve"><g> <path d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7 c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"/> <circle cx="41.5" cy="16.4" r="2.9"/> <path d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9 h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3 s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6 c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"/> </g> </svg>
            </a>
            <a href="https://github.com/dlastnoel" target="_blank" rel="noopener noreferrer">
              <svg enable-background="new 0 0 512 512" class="h-7 w-7" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path clip-rule="evenodd" d="M296.133,354.174c49.885-5.891,102.942-24.029,102.942-110.192   c0-24.49-8.624-44.448-22.67-59.869c2.266-5.89,9.515-28.114-2.734-58.947c0,0-18.139-5.898-60.759,22.669   c-18.139-4.983-38.09-8.163-56.682-8.163c-19.053,0-39.011,3.18-56.697,8.163c-43.082-28.567-61.22-22.669-61.22-22.669   c-12.241,30.833-4.983,53.057-2.718,58.947c-14.061,15.42-22.677,35.379-22.677,59.869c0,86.163,53.057,104.301,102.942,110.192   c-6.344,5.452-12.241,15.873-14.507,30.387c-12.702,5.438-45.808,15.873-65.758-18.592c0,0-11.795-21.31-34.012-22.669   c0,0-22.224-0.453-1.813,13.592c0,0,14.96,6.812,24.943,32.653c0,0,13.6,43.089,76.179,29.48v38.543   c0,5.906-4.53,12.702-15.865,10.89C96.139,438.977,32.2,354.626,32.2,255.77c0-123.807,100.216-224.022,224.03-224.022   c123.347,0,224.023,100.216,223.57,224.022c0,98.856-63.946,182.754-152.828,212.688c-11.342,2.266-15.873-4.53-15.873-10.89   V395.45C311.1,374.577,304.288,360.985,296.133,354.174L296.133,354.174z M512,256.23C512,114.73,397.263,0,256.23,0   C114.73,0,0,114.73,0,256.23C0,397.263,114.73,512,256.23,512C397.263,512,512,397.263,512,256.23L512,256.23z" fill="#0D2636" fill-rule="evenodd"/></g></svg>
            </a>
            <a href="https://www.linkedin.com/in/noel-xavier-ulpindo-084278205/" target="_blank" rel="noopener noreferrer">
              <svg fill="none" class="h-7 w-7" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg"><path d="M14.0142 0.965088H2.51824C1.92097 0.965088 1.34816 1.20235 0.925831 1.62468C0.503499 2.04702 0.266235 2.61982 0.266235 3.21709V14.7131C0.266235 15.3104 0.503499 15.8832 0.925831 16.3055C1.34816 16.7278 1.92097 16.9651 2.51824 16.9651H14.0142C14.6115 16.9651 15.1843 16.7278 15.6066 16.3055C16.029 15.8832 16.2662 15.3104 16.2662 14.7131V3.21709C16.2662 2.61982 16.029 2.04702 15.6066 1.62468C15.1843 1.20235 14.6115 0.965088 14.0142 0.965088ZM5.60024 13.7491C5.60024 13.7891 5.57324 13.8491 5.52024 13.9301C5.44024 13.9841 5.37924 14.0101 5.33924 14.0101H3.48924C3.44924 14.0101 3.38924 13.9841 3.30924 13.9301C3.25524 13.8501 3.22824 13.7901 3.22824 13.7491V7.25509C3.22824 7.21509 3.25524 7.15509 3.30824 7.07509C3.38824 7.02109 3.44824 6.99409 3.48924 6.99409H5.33924C5.37924 6.99409 5.43924 7.02109 5.51924 7.07409C5.57324 7.15409 5.60024 7.21409 5.60024 7.25509V13.7491ZM5.29924 5.88809C5.18426 6.00567 5.04642 6.09845 4.89421 6.16071C4.742 6.22297 4.57865 6.25339 4.41424 6.25009C4.06524 6.25009 3.77124 6.13009 3.52924 5.88809C3.41161 5.77315 3.31879 5.63532 3.25653 5.4831C3.19427 5.33088 3.16388 5.16751 3.16724 5.00309C3.16724 4.66809 3.28824 4.38009 3.52924 4.13909C3.64292 4.01844 3.78007 3.92231 3.93226 3.85661C4.08445 3.79091 4.24847 3.75701 4.41424 3.75701C4.58 3.75701 4.74402 3.79091 4.89621 3.85661C5.0484 3.92231 5.18555 4.01844 5.29924 4.13909C5.53924 4.37909 5.66024 4.66909 5.66024 5.00309C5.66024 5.35209 5.54024 5.64709 5.29924 5.88809ZM13.4612 13.7491C13.4609 13.7831 13.4537 13.8167 13.4399 13.8478C13.4262 13.879 13.4062 13.907 13.3812 13.9301C13.3581 13.955 13.3301 13.975 13.299 13.9888C13.2679 14.0025 13.2343 14.0098 13.2002 14.0101H11.3102C11.2702 14.0101 11.2102 13.9841 11.1302 13.9301C11.0762 13.8501 11.0492 13.7901 11.0492 13.7491V9.78909C11.0492 9.45309 10.9892 9.19209 10.8682 9.00409C10.7202 8.84409 10.4792 8.76409 10.1442 8.76409C9.71524 8.76409 9.40724 8.89009 9.21924 9.14509C9.04524 9.40009 8.95824 9.76209 8.95824 10.2311V13.7491C8.95792 13.7831 8.95066 13.8167 8.93691 13.8478C8.92315 13.879 8.90319 13.907 8.87824 13.9301C8.85498 13.9552 8.82683 13.9752 8.79553 13.989C8.76423 14.0027 8.73043 14.0099 8.69624 14.0101H6.84624C6.80624 14.0101 6.74623 13.9841 6.66623 13.9301C6.61224 13.8501 6.58624 13.7901 6.58624 13.7491V7.25509C6.58624 7.21509 6.61224 7.15509 6.66623 7.07509C6.74623 7.02109 6.80624 6.99409 6.84624 6.99409H8.63624C8.69024 6.99409 8.74323 7.00709 8.79624 7.03409C8.82423 7.04809 8.85124 7.09409 8.87724 7.17409V7.27509L8.89723 7.31509V7.47609C9.34023 7.04809 9.95024 6.83309 10.7272 6.83309C11.5982 6.83309 12.2682 7.04109 12.7372 7.45609C13.2202 7.89809 13.4612 8.53609 13.4612 9.36609V13.7491Z" fill="black"/></svg>
            </a>
          </div>
          <ul class="flex justify-center items-center gap-5">
            <li>
              <router-link to="/" class="rounded px-2 py-3 outline-2 text-xl">Home</router-link>
            </li>
            <li>
              <router-link to="/about" class="rounded px-2 py-3 outline-2 text-xl">About</router-link>
            </li>
            <li>
              <a href="#" class="bg-white text-black rounded px-2 py-3 outline-2 text-xl">Let's Talk</a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="h-full flex justify-center items-center flex-col gap-5">
        <img src="../assets/img/profile.jpg" alt="" class="h-[200px] rounded-full" srcset="">
        <div class="p-3 border-[4px] border-solid border-black rounded-md">
          <h1 class="text-2xl md:text-4xl lg:text-6xl xl:text-8xl">Hi! I am Noel Xavier M. Ulpindo</h1>
        </div>

        <h3 class="text-2xl lg:text-4xl xl:text-6xl text-center bg-blue-500 text-white rounded px-2 py-3">
          <VueWriter :array="['Full Stack Web Developer', 'Freelancer', 'Vintage Clothing Collector' ]" :typeSpeed="70" />
        </h3>
      </div>
    </section>

    <!-- how may i help you -->
    <section class="grid place-content-center p-5 bg-gray-50">
      <h2 class="text-4xl xl:text-6xl text-center">Services</h2>
      <div class="mt-3 container m-auto">
        <div class="grid place-content-center grid-cols-1 md:grid-cols-3 gap-5 mt-2">
          <div class="bg-white rounded-md shadow p-[50px] flex flex-col justify-center items-center gap-2">
            <img src="../assets/img/code.png" class="h-[200px]" alt="">
            <h4 class="text-3xl text-center">Full Stack Development</h4>
            <hr class="w-full border-2 border-black">
            <span class="text-2xl text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam explicabo ad error similique? A omnis unde quam perferendis est iusto?</span>
          </div>
          <div class="bg-white rounded-md shadow p-[50px] flex flex-col justify-center items-center gap-2">
            <img src="../assets/img/mobile.png" class="h-[200px]" alt="">
            <h4 class="text-3xl text-center">Mobile Development</h4>
            <hr class="w-full border-2 border-black">
            <span class="text-2xl text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam explicabo ad error similique? A omnis unde quam perferendis est iusto?</span>
          </div>
          <div class="bg-white rounded-md shadow p-[50px] flex flex-col justify-center items-center gap-2">
            <img src="../assets/img/coach.png" class="h-[200px]" alt="">
            <h4 class="text-3xl text-center">Coaching and Mentorship</h4>
            <hr class="w-full border-2 border-black">
            <span class="text-2xl text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam explicabo ad error similique? A omnis unde quam perferendis est iusto?</span>
          </div>
        </div>
      </div>
    </section>

    <!-- tech stacks -->
    <!-- <section class="p-5 bg-blue-500">
      <h2 class="text-xl md:text-2xl lg:text-4xl xl:text-6xl text-center text-white">Techonlogy Stacks</h2>
      <div class="container m-auto mt-5 flex flex-wrap justify-center items-center">
        <div class="h-[100px] w-[100px] bg-white rounded-md shadow p-3 m-2 flex flex-col justify-center items-center gap-2">
          <img src="../assets/img/stacks/html.svg" alt="">
        </div>
        <div class="h-[100px] w-[100px] bg-white rounded-md shadow p-3 m-2 flex flex-col justify-center items-center gap-2">
          <img src="../assets/img/stacks/css.svg" alt="">
        </div>
        <div class="h-[100px] w-[100px] bg-white rounded-md shadow p-3 m-2 flex flex-col justify-center items-center gap-2">
          <img src="../assets/img/stacks/javascript.svg" alt="">
        </div>
        <div class="h-[100px] w-[100px] bg-white rounded-md shadow p-3 m-2 flex flex-col justify-center items-center gap-2">
          <img src="../assets/img/stacks/php.svg" alt="">
        </div>
        <div class="h-[100px] w-[100px] bg-white rounded-md shadow p-3 m-2 flex flex-col justify-center items-center gap-2">
          <img src="../assets/img/stacks/laravel.svg" alt="">
        </div>
        <div class="h-[100px] w-[100px] bg-white rounded-md shadow p-3 m-2 flex flex-col justify-center items-center gap-2">
          <img src="../assets/img/stacks/mysql.svg" alt="">
        </div>
        <div class="h-[100px] w-[100px] bg-white rounded-md shadow p-3 m-2 flex flex-col justify-center items-center gap-2">
          <img src="../assets/img/stacks/vue.svg" alt="">
        </div>
        <div class="h-[100px] w-[100px] bg-white rounded-md shadow p-3 m-2 flex flex-col justify-center items-center gap-2">
          <img src="../assets/img/stacks/api.svg" alt="">
        </div>
        <div class="h-[100px] w-[100px] bg-white rounded-md shadow p-3 m-2 flex flex-col justify-center items-center gap-2">
          <img src="../assets/img/stacks/python.svg" alt="">
        </div>
        <div class="h-[100px] w-[100px] bg-white rounded-md shadow p-3 m-2 flex flex-col justify-center items-center gap-2">
          <img src="../assets/img/stacks/django.svg" alt="">
        </div>
        <div class="h-[100px] w-[100px] bg-white rounded-md shadow p-3 m-2 flex flex-col justify-center items-center gap-2">
          <img src="../assets/img/stacks/flutter.svg" alt="">
        </div>
      </div>
    </section> -->

    <!-- projects -->
    <section class="bg-blue-500 p-5">
      <div class="container mx-auto">
        <h2 class="text-4xl xl:text-6xl text-white text-center py-5">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div class="p-5 shadow bg-white rounded-md">
            <img src="../assets/img/rapha_logo.png" class="h-[150px] mx-auto" alt="">
            <h3 class="text-2xl">Rapha: A Multiplatform Medical History Taking-App with Descriptive Analytics (Capstone Project)</h3>
            <p class="text-xl mt-5">Came from the Hebrew word which means "healing and cure", Rapha is a mobile and web system which is capable on questioning the medical history of the user and gives an option whether to consult a doctor or not.</p>
          </div>
            <div class="p-5 shadow bg-white rounded-md">
            <img src="../assets/img/dmmmsu_logo.png" class="h-[150px] mx-auto" alt="">
            <h3 class="text-2xl">MLUC - College of Management Cafeteria System</h3>
            <p class="text-xl mt-5">The MLUC-COM Cafeteria System has the ability to record cafeteria sales and expenses, monitor staff, kitchen queues and print receipts. It is made and designed for the College of Management.</p>
          </div>
          <div class="p-5 shadow bg-white rounded-md">
            <img src="../assets/img/helping_hand.png" class="h-[150px] mx-auto" alt="">
            <h1 class="text-2xl">Helping Hand (Startup)</h1>
            <p class="text-xl mt-5">Helping hand (startup) is a small remote-based team by a group of college and graduate friends that accepts academic and school-related commissions on different courses and subject areas. </p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import VueWriter from 'vue-writer'

export default {
  name: "Home",
	components: {
    VueWriter
  }
}
</script>