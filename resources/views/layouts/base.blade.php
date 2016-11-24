<!DOCTYPE html>
<html lang="en">
    <head>
      @include('layouts.partials.head')
    </head>
    <body class="public {{ str_replace('.', '-', Route::currentRouteName()) }} lang-{{ App::getLocale() }}">
        <!--[if lt IE 9]>
        <div class="alert alert-info">
        <strong>Heads up!</strong> You're using an older web browser, so some parts of this site may not work properly.
        You might want to try to <a href="http://whatbrowser.org/" class="alert-link">upgrade your browser</a>.
        You'll find that many websites work and look better, and you'll be safer online!
        </div>
        <![endif]-->

        <main id="main" role="main" tabindex="-1">
          <div class="main-wrapper">
            <div class="main-row">

              @include('layouts.partials.sidebar')

              <div id="main-content" class="main-content">

                <div class="main-display"
                     :class="{ maximized: sidebarIsMinimized }">

                    <!-- include sample-alert.html  -->

                    <header id="header" class="main-header">
                      <h1 class="header-title">
                        <span class="header-icon @yield('title-icon')"></span>
                        @yield('title')
                      </h1>
                    </header>

                    <div class="sub-header">
                      Breadcrumb goes here...
                    </div>

                    @yield('content')
                  </div>
                </div>
              </div><!-- /.main-row -->
          </div><!-- /.main-wrapper -->
        </main>

        <script src="/js/main.js"></script>
        @scripts('public')
        @yield('script')
    </body>
</html>
