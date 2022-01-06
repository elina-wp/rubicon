<div class="theme-app d-flex flex-column">
    <div class="theme-wrap position-relative">
        @include('partials.header')
        <!-- Pushy Menu -->
        <div class="pushy pushy--left" data-focus="#first-link">
            <div class="pushy-content h-100 px-8 pt-12">
               
            </div>
        </div>
        <main class="theme-main">
            @yield('content')
        </main>
    </div>
     @include('partials.footer')
</div>

