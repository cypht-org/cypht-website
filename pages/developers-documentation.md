---
title: Devs-doc
weight: 35
nocontainer: true
---
<main class="dev-docs-section contibute-section container">
    <div class="container">
        <h2>Folder structure</h2>
        <h3 class="bold-title"><b>.github</b></h3>
        <p>This folder contains files used for CI/CD on GitHub, such as running tests during merge requests and
            building Docker images. It streamlines collaboration, automates processes, and ensures consistency
            across the repository. You'll also find templates for pull requests, issues, and bug reports. To edit
            the default text in a merge request description, simply modify the relevant file in this folder.</p>
        <h3 class="bold-title"><b>.travis</b></h3>
        <p>Refer to <a href="https://docs.travis-ci.com/user/for-beginners/" target="_blank">Travis CI for Beginners.</a></p>
        <h3 class="bold-title"><b>Config</b></h3>
        <p>This was introduced with the support of <span class="code-badge">.env</span> files in Cypht</p>
        <p>It contains all the contents of the <span class="code-badge">.env</span> file grouped by semantics within the files. Files in this folder
            return an array. They simply take the values from the <span class="code-badge">.env</span> file and set a default value if it is not
            defined.</p>
        <p>A special case is that the <span class="code-badge">Dynamic.php</span> file (not tracked by git) is automatically generated every time
            you change something in the <span class="code-badge">.env.</span> file. After compiling all other files in this folder, this is the
            configuration file used by Cypht at runtime.</p>
        <p><a href="https://github.com/cypht-org/cypht/pull/823/" target="_blank">Related PR: Switching cypht config hm3.* to dotenv</a></p>
        <h3 class="bold-title"><b>language</b></h3>
        <p>Contains translation files</p>
        <h3 class="bold-title"><b>lib</b></h3>
        <p>Contains the core of Cypht</p>
        <h3 class="bold-title"><b>modules</b></h3>
        <p>Contains all modules. Each module contains the files below:</p>
        <ul>
            <li><span class="code-badge">site.js</span>: contains module-specific javascript code</li>
            <li><span class="code-badge">site.css</span>: contains module-specific CSS code</li>
            <li><span class="code-badge">setup.php</span>: These are management modules, output modules, pages, allowed post variables, allowed get
                variables, allowed output variables, allowed cookies are set.</li>
            <li><span class="code-badge">modules.php</span>: This file contains handlers and output classes. Some modules with multiple handlers,
                outputs and functions may use this file to simply include other files. Take a look at
                <span class="code-badge">modules/core/modules.php</span> to get an idea.</li>
            <li><span class="code-badge">Assets folder</span>: some modules have assets (fonts, images, samples). Please see the core or local_contacts
                modules.</li>
        </ul>
        <p>You will get a detailed explanation of how each module works in <span class="code-badge">config/app.php.</span></p>
        <p><strong>Important information</strong> about inter-module dependencies: Cypht modules are designed to be pluggable functionality that can be conditionally turned on or off. It is important to design and keep them as self-contained as possible. It is OK to depend on the core module but when you face a situation where you need to use functionality from another module you should ask yourself if you are building the functionality in the right place. One example is sievefilters module - it is adding support for Sieve managment on top of existing IMAP servers that support it. Overall, it depends on the imap module and cannot work without it. However, IMAP module does not depend on Sievefilters module and can work without it. Thus, if you put any functionality that is connected with Sieve (including configuration storage or simple Sieve parsing) in IMAP module, this is breaking module encapsulation. The right place to put it is in Sievefilters module. If you want to extend a module in IMAP to support Sieve, consider adding a module in Sievefilters and define it to run "after" or "before" another module in IMAP module. This will help you augment functionality in one module by not touching it at all. Avoid require/include lines for files from another module at all costs.</p>
        <h3 class="bold-title"><b>scripts</b></h3>
        <p>Contains script files to generate configuration (done once after installation), create/delete/update user
            accounts, generate necessary tables to manage users, sessions, or settings based on values in the
            environment file and finally others script for development purpose.</p>
        <h3 class="bold-title"><b>site</b></h3>
        <p>The site folder contains production files generated by <span class="code-badge">scripts/config_gen.php</span></p>
        <h3 class="bold-title"><b>tests</b></h3>
        <p>contains PHPUnit and selenium tests</p>
        <h3 class="bold-title"><b>third_party</b></h3>
        <p>Contains third party minified files used in Cypht</p>
        <h3 class="bold-title"><b>.env</b></h3>
        <p>The <span class="code-badge">.env</span> file is for high-level configuration. For any variables you're unsure about, check the
            configuration folder for detailed explanations.</p>
        <h2>How to</h2>
        <h3 class="bold-title"><b>See the new link in the left menu</b></h3>
        <p>Sometimes you can add a link to the left menu without seeing it. Cypht caches all menus. You need to
            click on the reload link below the navigation menu.</p>
        <h3 class="bold-title"><b>Create a page</b></h3>
        <p>Cypht supports two types of pages: <b>basic</b> and <b>AJAX</b>. Basic pages are accessible via URL and require a page
            reload, while AJAX pages load asynchronously.</p>
        <p>To create a page called list_messages that displays all messages from the database, navigate to the
            correct module (e.g., the nux module) and insert the following code just before the return array:</p>
        <p class="highlight-text">In <span class="highlight-secondary">nux/setup.php</span>:</p>
        <code class="code-block">
            <span class="function-keyword">setup_base_page</span>('all_messages', 'core');<br>
            <span class="function-keyword">add_handler</span>('all_messages', 'load_messages',  true);<br>
            <span class="function-keyword">add_output</span>('all_messages', 'print_messages', true);
        </code>
        <ul>
        <li><b>setup_base_page</b> adds your new page to the routes, the first argument is the name of the page accessible
            by typing <b>/?page=all_messages</b> in the browser in this case</li>
        <li><b>add_handler</b> adds a handler to the page. A handler class contains logic, validates forms, binds alert
            messages, and passes output variables for use in the output.</li>
        <li><b>add_output</b> adds output to the page. An output class contains HTML that will be returned to the client by typing <b>/?page=all_messages</b></li>
        </ul>
        <h3 class="bold-title"><b>Handler and Output Modules</b></h3>
        <p class="highlight-text">In <span class="highlight-secondary">nux/modules.php</span>:</p>
        <code class="code-block">
            <span class="function-keyword">class Hm_Handler_load_messages</span> extends Hm_Handler_Module {<br>
            <span class="default-text">    public function process() {</span><br>
            <span class="default-text">        // Do some logic here</span><br>
            <span class="default-text">        // Get the list of messages</span><br>
            <span class="default-text">        // Pass the list to the output</span><br>
            <span class="default-text">    }</span><br>
            <span class="default-text">}</span><br><br>
            <span class="function-keyword">class Hm_Output_print_messages</span> extends Hm_Output_Module {<br>
            <span class="default-text">    protected function output() {</span><br>
            <span class="default-text">        // Get the list of message passed by Hm_Handler_load_messages</span><br>
            <span class="default-text">        // Build the html that will be returned</span><br>
            <span class="default-text">        // Use return statement to return the html</span><br>
            <span class="default-text">    }</span><br>
            <span class="default-text">}</span>
        </code>
        <p>Let's say you want to add an ajax page called ajax_load_new_messages which will receive new messages sent
            to the user and update the message list every 15 seconds.</p>
        <p class="highlight-text">In <span class="highlight-secondary">nux/setup.php</span>:</p>
        <code class="code-block">
            <span class="function-keyword">setup_base_ajax_page</span>('ajax_load_new_messages', 'core');<br>
            <span class="function-keyword">add_handler</span>('ajax_load_new_messages', 'get_new_messages', true);<br>
            <span class="function-keyword">add_output</span>('ajax_load_new_messages', 'print_new_messages', true);
        </code>
        <p class="highlight-text">In <span class="highlight-secondary">nux/modules.php</span>:</p>
        <code class="code-block">
            <span class="function-keyword">class Hm_Handler_get_new_messages</span> extends Hm_Handler_Module {<br>
            <span class="default-text">    public function process() {</span><br>
            <span class="default-text">        // Do some logic here</span><br>
            <span class="default-text">        // Get the list of new messages</span><br>
            <span class="default-text">        // Pass the list to the output</span><br>
            <span class="default-text">    }</span><br>
            <span class="default-text">}</span><br><br>
            <span class="function-keyword">class Hm_Output_print_new_messages</span> extends Hm_Output_Module {<br>
            <span class="default-text">    protected function output() {</span><br>
            <span class="default-text">        // Get the list of messages passed by Hm_Handler_get_new_messages</span><br>
            <span class="default-text">        // Build the HTML that will be returned</span><br>
            <span class="default-text">        // Use the out to return data</span><br>
            <span class="default-text">        $this->out('ajax_messages', $new_messages);</span><br>
            <span class="default-text">    }</span><br>
            <span class="default-text">}</span>
        </code>
        <p>Add this code in <span class="highlight-secondary">nux/site.js</span> to run your ajax page every 15 seconds:
        </p>
        <code class="code-block">
            <span class="function-keyword">$(function() {</span><br>
            <span class="default-text">    if (hm_page_name() === 'all_messages') {</span><br>
            <span class="default-text">        setInterval(function() {</span><br>
            <span class="default-text">            Hm_Ajax.request(</span><br>
            <span class="default-text">                [{'name': 'hm_ajax_hook', 'value': 'ajax_load_new_messages'}],</span><br>
            <span class="default-text">                function(res) {</span><br>
            <span class="default-text">                    if (res.ajax_messages) {</span><br>
            <span class="default-text">                        // Append new messages to the list of messages</span><br>
            <span class="default-text">                        $('#messages_list').append(res.messages);</span><br>
            <span class="default-text">                    }</span><br>
            <span class="default-text">                }</span><br>
            <span class="default-text">            );</span><br>
            <span class="default-text">        }, 15000);</span><br>
            <span class="default-text">    }</span><br>
            <span class="function-keyword">});</span>
        </code>
        <p><b><b>Note:</b></b> If <span class="function-keyword">setup_base_ajax_page</span> does not have output modules, the
            values returned with <span class="function-keyword">$this->out()</span> will be accessible in <span
                class="function-keyword">res</span> in JavaScript.</p>
        <p>Finally, add the following code to <span class="highlight-secondary">nux/setup.php</span>:</p>
        <code class="code-block">
            <span class="function-keyword">return array(</span><br>
            <span class="default-text">    'allowed_pages' => array(</span><br>
            <span class="default-text">        ...</span><br>
            <span class="default-text">        'ajax_load_new_messages',</span><br>
            <span class="default-text">        'all_messages'</span><br>
            <span class="default-text">    ),</span><br>
            <span class="default-text">    'allowed_get' => array(</span><br>
            <span class="default-text">        ...</span><br>
            <span class="default-text">    ),</span><br>
            <span class="default-text">    'allowed_output' => array(</span><br>
            <span class="default-text">        ...</span><br>
            <span class="default-text">        'ajax_messages'</span><br>
            <span class="default-text">    ),</span><br>
            <span class="default-text">    'allowed_post' => array(</span><br>
            <span class="default-text">        ...</span><br>
            <span class="default-text">    )</span><br>
            <span class="function-keyword">);</span>
        </code>
        <p>Add <span class="function-keyword">all_messages</span> and <span
                class="function-keyword">ajax_load_new_messages</span> to the list of allowed pages.</p>
        <p>Add <span class="function-keyword">ajax_messages</span> to the list of allowed outputs.</p>
        <p>Add post/get variables if they exist in the list of allowed get/posts.</p>
        <p><b><b>Note:</b></b> A page can have multiple handlers/outputs. A full list of all handlers and outputs attached to
            a page can be seen by accessing <span class="function-keyword">?page=info</span> page on your instance in
            the <b>configuration map section</b>.</p>
        <h3 class="bold-title"><b>Add third party</b></h3>
        <p>Copy the minified file to the third-party directory</p>
       <p>
        Add the file path in <code>Hm_Output_page_js.output</code> or 
        <code>Hm_Output_header_css.output</code> if it is a CSS file.
        </p>
        <p>Finally, add the file in the combine_includes function in scripts/config_gen.php so that it is added when
            generating the production site.</p>
        <h3 class="bold-title"><b>Enable a module</b></h3>
        <p>Edit <span class="code-badge">.env</span> file and add your module to CYPHT_MODULES variable</p>
        <h3 class="bold-title"><b>Create a module</b></h3>
        <p>In the modules folder, you'll find a <b>hello_world</b> module with the necessary scaffolding for creating a
            new module. Customize your module by following the code explained above.</p>
        <h3 class="bold-title"><b>Translate string</b></h3>
        <p>If you need to translate a string in:</p>
        <p><span class="highlight-secondary">Handler module</span>:</p>
        <p>Most strings in handlers are only intended to alert the user of success/information/failure operations.
            And so they are all written without a translation method but they are all translated later in the
            Hm_Output_msgs::output function.</p>
        <p><span class="highlight-secondary">Output module</span>:</p>
        <code class="code-block">
            <span class="default-text">$this->trans("Your text here");</span>
        </code>
        <p></p><span class="highlight-secondary">JS file</span>:</p>
        <code class="code-block">
            <span class="default-text">hm_trans("Your text here", "en");</span>
        </code>
        <p>The second parameter here is optional because the default language is the user's language in the settings
            page.</p>
        <h3 class="bold-title"><b>Add new translation string</b></h3>
        <p>Add your string to each file contained in the language folder.</p>
        <p>The file names in this folder are language codes. And all return an array. Just add your new string to
            the end of the array. If you know the translation of the text in a language, add it as a value,
            otherwise add false as a value.</p>
        <h3 class="bold-title"><b>Add new language</b></h3>
        <p>Duplicate the en.php file into the language folder</p>
        <p>Rename it (Cypht uses 2 digit code, please refer to <a
                href="https://en.wikipedia.org/wiki/List_of_ISO_639_lingual_codes"
                target="_blank">https://en.wikipedia.org/wiki/List_of_ISO_639_lingual_codes</a>)</p>
        <p>In the renamed file, modify interface_lang and interface_direction in the array accordingly.</p>
        <p>Add your language in the interface_langs() function.</p>
        <p>Update this test to add your language: Hm_Test_Core_Output_Modules::test_lingual_setting</p>
        <h3 class="bold-title"><b>Run test</b></h3>
        <p>Cypht has PHPUnit tests and selenium</p>
        <h3 class="bold-title"><b> PHPUnit</b></h3>
        <p>To run all tests:</p>
        <code style="display: block; background-color: #1e1e1e; color: #f8f8f2; padding: 15px; border-radius: 5px; font-size: 16px; line-height: 1.5; overflow-x: auto; white-space: pre-wrap; margin-bottom: 20px;">
            <span class="function-keyword"> php vendor/phpunit/phpunit/phpunit --configuration tests/phpunit/phpunit.xml</span>
        </code>
        <p>To run tests contained in a class or a single test method:</p>
        <p class="highlight-text">To run tests contained in a class or a single test method:</p>
        <code class="code-block">
            <span class="function-keyword">php vendor/phpunit/phpunit/phpunit --configuration tests/phpunit/phpunit.xml --filter classOrMethodName</span>
        </code>
        <p class="highlight-text">To run Selenium tests, make sure you have Python installed (<a
                href="https://www.python.org/downloads/">https://www.python.org/downloads/</a>). Once Python is
            installed, you should be able to run the following command:</p>
        <code class="code-block">
                <span class="function-keyword">pip install -r requirements.txt</span>
        </code>
        <p class="highlight-text">This command will install all required packages. The
            requirements.txt file is located at tests/selenium, so make sure to specify the correct path in the
            command line, or navigate to that location.</p>
        <p class="highlight-text">Once all packages are installed, you can run Selenium tests
            using this command:</p>
        <code class="code-block">
            <span class="function-keyword">sh runall.sh</span>
        </code>
        <h3 class="bold-title"><b>Fix PHPUnit failing tests</b></h3>
        <p>Run all tests or filter specific ones, and the console will show the results. In VSCode or similar, click
            on the file path to go directly to the line causing the issue. Check recent changes to classes, divs, or
            logic in the handlers that may be causing the failure.</p>
        <code class="code-block">
            <span class="default-text">There was 1 failure:</span>
            <span class="default-text">1) Hm_Test_Uid_Cache::test_uid_is_read</span>
            <span class="default-text">Failed asserting that true is false.</span>
            <span class="default-text">/Applications/MAMP/htdocs/cypht/tests/phpunit/cache.php:19</span>
        </code>
        <h3 class="bold-title"><b>Debug AJAX requests</b></h3>
        <p>Cypht relies heavily on AJAX requests. To debug, add var_dump and exit in your code. Open your browser's
            developer tools, go to the Network tab, filter by Fetch/XHR to see AJAX requests, then run the code.
            Click on the request you want to inspect and view the preview or response.</p>
        <h3 class="bold-title"><b>The core module</b></h3>
        <p>The core module is responsible for:</p>
        <ul>
        <li> Rendering CSS headers</li>
        <li> Displaying alert messages</li>
        <li> Loading JavaScript files and defining shared JavaScript functions</li>
        <li> Configuring basic features like backups, server pages, settings, etc.</li>
        </ul>
        <h3 class="bold-title"><b>Practical Example: 1. Add a <code>test</code> page</b></h3>
        <p>As mentioned earlier, we use the setup_base_page function to add a new page. We'll call this function to
            make our test page available: </p>
        <p class="highlight-text">In <span class="highlight-secondary">core/setup.php</span>:</p>
        <code class="code-block">
            <span class="function-keyword">setup_base_page</span>('test');
        </code>
        <p>My Cypht project is available locally at cypht.test. Once we have added this page, we should be able to
            access cypht.test as follows: cypht.test?page=test</p>
        <img src="/img/screenshots/1.png" style="width:100%; margin-bottom: 10px;"/>
        <p>You might find it strange that we see "Page Not Found!" 😔, but understand that this is completely normal
            because we have explained the concept of authorizing pages, forms, etc.</p>
        <p class="highlight-text">In <span class="highlight-secondary">core/setup.php</span>:</p>
        <code class="code-block">
            <span class="function-keyword">/* allowed input */</span><br>
            <span class="function-keyword">return array(</span><br>
            <span class="default-text">    'allowed_pages' => array(</span><br>
            <span class="default-text">        ...</span><br>
            <span class="default-text">        'test'</span><br>
            <span class="default-text">    ),</span><br>
            <span class="default-text">    'allowed_output' => array(</span><br>
            <span class="default-text">        ...</span><br>
            <span class="default-text">    ),</span><br>
            <span class="default-text">    'allowed_cookie' => array(</span><br>
            <span class="default-text">        ...</span><br>
            <span class="default-text">    ),</span><br>
            <span class="default-text">    'allowed_server' => array(</span><br>
            <span class="default-text">        ...</span><br>
            <span class="default-text">    ),</span><br>
            <span class="default-text">    'allowed_get' => array(</span><br>
            <span class="default-text">        ...</span><br>
            <span class="default-text">    ),</span><br>
            <span class="default-text">    'allowed_post' => array(</span><br>
            <span class="default-text">        ...</span><br>
            <span class="default-text">    )</span><br>
            <span class="function-keyword">);</span>
        </code>
        <p>After authorizing our page, we can now see a blank page. At least we are getting a result, even if it's
            not yet what we expected 😁.</p>
        <img src="/img/screenshots/2.png" style="width:100%; margin-bottom: 10px;"/>
        <p>As mentioned earlier, the concepts of output and handle are important. At this stage, we define outputs
            to display the content of our pages. To show content to the user, create outputs containing HTML.</p>
        <p class="highlight-text">In <span class="highlight-secondary">core/setup.php</span>:</p>
        <code class="code-block">
            <span class="default-text">add_output('test', 'test_heading', true, 'core', 'content_section_start', 'after');</span>
        </code>
        <p>The first parameter refers to the page that we defined above: test. The second parameter refers to the
            class (module) that we need to define in <span class="code-badge">core/modules.php</span> with the name <b>Hm_Output_test_heading</b> (In the
            definition of the output in <span class="code-badge">setup.php</span>, we are not going to include <b>Hm_Output_</b> because it is a prefix
            that will be detected automatically). The third parameter allows you to indicate whether this content
            will be displayed based on the user's authentication status. The fourth parameter indicates the module
            that contains the module (output) code. The fifth parameter indicates the position on our page where
            this content will be displayed, and the sixth parameter, which goes with the fifth, determines whether
            this content will be before or after the fifth parameter.</p>
        <p>Here is <b>Hm_Output_content_section_start</b>, the content after which we want to display our header. </p>
        <p class="highlight-text">In <span class="highlight-secondary">core/output_modules.php</span>:</p>
        <code class="code-block">
            <span class="function-keyword">class Hm_Output_content_section_start </span> extends Hm_Output_Module {</br>
            <span class="function-keyword">/**</span><br>
            <span class="default-text"> * Opens a main tag for the primary content section</span><br>
            <span class="function-keyword"> */</span><br>
            <span class="function-keyword">protected function output()</span> {<br>
            <span class="default-text">    return '.$this->trans('Offline').'
            }</span><br>
        </code>
        <p>In our case, we want to place our html content before closing: </p>
        <p class="highlight-text">In <span class="highlight-secondary">core/output_modules.php</span>:
        </p>
        <code class="code-block">
            <span class="default-text">&lt;div class="row m-0 position-relative"&gt;</span><br>
            <span class="default-text">&lt;main class="container-fluid content_cell"&gt;</span>
        </code>
        <p>Here is the definition of the module: test_heading which will display the title Test in the header</p>
        <p class="highlight-text">In <span class="highlight-secondary">core/output_modules.php</span>:
        </p>
        <code class="code-block">
            <span class="function-keyword">class Hm_Output_test_heading</span> extends Hm_Output_Module {<br>
            <span class="function-keyword">/**</span><br>
            <span class="function-keyword"> */</span><br>
            <span class="function-keyword">protected function output()</span> {<br>
            <span class="default-text">    return '&lt;div class="content_title"&gt;'.$this-&gt;trans('Test').'&lt;/div&gt;';</span><br>
            <span class="function-keyword"> }</span><br>
            <span class="function-keyword">}</span>
        </code>
        <p>And here is the result we get; we start to see the result that we are looking for 👌.</p>
        <img src="/img/screenshots/3.png" style="width:100%; margin-bottom: 10px;"/>
        <p>Now that we know how to add content, let's add another section after the header. </p>
        <p>Define the output in <span class="code-badge">core/setup.php</span> to display it right after the header. You should already know what
            the penultimate and last parameters will be.</p>
        <p class="highlight-text">In <span class="highlight-secondary">core/setup.php</span>:</p>
        <code class="code-block">
            <span class="default-text">add_output('test', 'test_first_div', true, 'core', 'test_heading', 'after');</span>
        </code>
        <p class="highlight-text">Let's define our class(module): <span
                class="highlight-secondary">test_first_div</span></p>
        <p class="highlight-text">In <span class="highlight-secondary">core/output_modules.php</span>:
        </p>
        <code class="code-block">
            <span class="function-keyword">class Hm_Output_test_first_div</span> extends Hm_Output_Module {<br>
                <span class="function-keyword">protected function output()</span> {<br>
                return '&lt;div class="mt-3 col-lg-6 col-md-12 col-sm-12"&gt;
                        &lt;div class="card"&gt;
                            &lt;div class="card-body"&gt;
                                &lt;div class="card_title"&gt;
                                    &lt;h4&gt;'.$this-&gt;trans('Test').'&lt;/h4&gt;
                                &lt;/div&gt;
                                '.$this-&gt;trans('We are just testing').'
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;';
                <span class="function-keyword"> }</span><br>
            <span class="function-keyword">}</span>
        </code>
        <p class="highlight-text">And here is the result we hope for:</p>
        <img src="/img/screenshots/4.png" style="width:100%; margin-bottom: 10px;"/>
        <p class="highlight-text">Let's add another element to our page just after our second
            element:</p>
        <p class="highlight-text">In <span class="highlight-secondary">core/setup.php</span>:</p>
        <code class="code-block">
            <span class="default-text">add_output('test', 'test_second_div', true, 'core', 'test_first_div', 'after');</span>
        </code>
        <p class="highlight-text">In <span class="highlight-secondary">core/output_modules.php</span>:
        </p>
        <code class="code-block">
            <span class="function-keyword">class Hm_Output_test_second_div</span> extends Hm_Output_Module {<br>
                <span class="function-keyword">protected function output()</span> {<br>
                <span class="default-text">    return '&lt;div class="mt-3 col-lg-6 col-md-12 col-sm-12"&gt;'.</span><br>
                <span class="default-text">           '&lt;div class="card"&gt;'.</span><br>
                <span class="default-text">               '&lt;div class="card-body"&gt;'.</span><br>
                <span class="default-text">                   '&lt;div class="card_title"&gt;'.</span><br>
                <span class="default-text">                   '&lt;h4&gt;'.$this-&gt;trans('Test again').'&lt;/h4&gt;&lt;/div&gt;'.</span><br>
                <span class="default-text">                   $this-&gt;trans('We are again just testing').' '.</span><br>
                <span class="default-text">               '&lt;/div&gt;'.</span><br>
                <span class="default-text">           '&lt;/div&gt;'.</span><br>
                <span class="default-text">       '&lt;/div&gt;';</span><br>
                <span class="function-keyword"> }</span><br>
            <span class="function-keyword">}</span>
        </code>
        <p class="highlight-text">And here is the result:</p>
        <img src="/img/screenshots/5.png" style="width:100%; margin-bottom: 10px;"/>
        <p class="highlight-text">Now that we know how to add content, let's add a form element to
            the page. We'll submit the form and handle its processing in the backend</p>
        <p class="highlight-text">In <span class="highlight-secondary">core/setup.php</span>:</p>
        <code class="code-block">
            <span class="default-text">add_output('test', 'test_third_div', true, 'core', 'test_second_div', 'after');</span>
        </code>
        <p class="highlight-text">In <span class="highlight-secondary">core/output_modules.php</span>:
        </p>
        <code class="code-block">
            class Hm_Output_test_third_div extends Hm_Output_Module {
                protected function output() {
                    return '&lt;div class="nux_help mt-3 col-lg-12 col-md-12 col-sm-12"&gt;' .
                        '&lt;div class="card"&gt;' .
                            '&lt;div class="card-body"&gt;' .
                                '&lt;div class="card_title"&gt;&lt;h4&gt;' . 
                                    $this->trans('Test Our Form') . '&lt;/h4&gt;&lt;/div&gt;' .
                                '&lt;form class="add_server me-0" method="POST" action="?page=test"&gt;' .
                                    '&lt;input type="hidden" name="hm_page_key" value="' . 
                                        $this->html_safe(Hm_Request_Key::generate()) . '" /&gt;' .
                                    '&lt;div class="subtitle mt-4"&gt;Tag name&lt;/div&gt;' .
                                    '&lt;div class="form-floating mb-3"&gt;' .
                                        '&lt;input required type="text" id="new_tag_name" name="new_tag_name" class="txt_fld ' .
                                        'form-control" value="" placeholder="' . $this->trans('Tag name') . '" /&gt;' .
                                        '&lt;label class="" for="new_tag_name"&gt;' . 
                                            $this->trans('Tag name') . '&lt;/label&gt;' .
                                    '&lt;/div&gt;' .
                                    '&lt;input type="submit" class="btn btn-primary px-5" value="' . 
                                        $this->trans('Add') . '" name="submit_tag" /&gt;' .
                                '&lt;/form&gt;' .
                            '&lt;/div&gt;' .
                        '&lt;/div&gt;' .
                    '&lt;/div&gt;';
                }
            }
        </code>
        <p>Here is the result:</p>
        <img src="/img/screenshots/6.png" style="width:100%; margin-bottom: 10px;"/>
        <p>We learned that add_output allows us to add HTML content to the page, while <b>add_handler</b> is used for
            backend processing (like a controller). Both accept similar parameters, with the concepts of 'before'
            and 'after' applying to handlers instead of outputs. Remember that these refer to other handlers, and
            the class will extend <b>Hm_Handler_Module</b></p>
        <p class="highlight-text">In <span class="highlight-secondary">core/setup.php</span>:</p>
        <code class="code-block">
            <span class="default-text">add_handler('test', 'process_test_third_div', true, 'core', 'load_user_data', 'after');</span>
        </code>
        <p>Don't forget to authorize the form field in 'allowed_post'; otherwise, you won't be able to access it.
        </p>
        <p class="highlight-text">In <span class="highlight-secondary">core/setup.php</span>:</p>
        <code class="code-block">
            <span class="function-keyword">/* allowed input */</span><br>
            <span class="function-keyword">return array(</span><br>
            <span class="default-text">    'allowed_pages' => array(</span><br>
            <span class="default-text">        '...',</span><br>
            <span class="default-text">        'test'</span><br>
            <span class="default-text">    ),</span><br>
            <span class="default-text">    'allowed_output' => array(</span><br>
            <span class="default-text">        '...',</span><br>
            <span class="default-text">    ),</span><br>
            <span class="default-text">    'allowed_cookie' => array(</span><br>
            <span class="default-text">        '...',</span><br>
            <span class="default-text">    ),</span><br>
            <span class="default-text">    'allowed_server' => array(</span><br>
            <span class="default-text">        '...',</span><br>
            <span class="default-text">    ),</span><br>
            <span class="default-text">    'allowed_get' => array(</span><br>
            <span class="default-text">        '...',</span><br>
            <span class="default-text">    ),</span><br>
            <span class="default-text">    'allowed_post' => array(</span><br>
            <span class="default-text">        '...',</span><br>
            <span class="default-text">        'new_tag_name' => FILTER_DEFAULT</span><br>
            <span class="default-text">    )</span><br>
            <span class="function-keyword">);</span>
        </code>
        <p>We can now define our handler:</p>
        <p class="highlight-text">In <span class="highlight-secondary">core/handler_modules.php</span>:</p>
        <code class="code-block">
            <span class="function-keyword">class Hm_Handler_process_test_third_div</span> extends Hm_Handler_Module {<br>
            <span class="function-keyword">/**</span><br>
            <span class="function-keyword"> * If "stay logged in" is checked, set the session lifetime</span><br>
            <span class="function-keyword"> */</span><br>
            <span class="function-keyword">public function process()</span> {<br>
            <span class="default-text">    list($success, $form) = $this->process_form(array('new_tag_name'));</span><br>
            <span class="default-text">    if ($success && $form['new_tag_name']) {</span><br>
            <span class="default-text">        // var_dump($form);die();</span><br>
            <span class="default-text">    }</span><br>
            <span class="function-keyword"> }</span><br>
            <span class="function-keyword">}</span>
        </code>
        <p>In this documentation, we've discussed how to pass data from POST to GET. Let's consider a scenario where
            we want to display the entered data as the label for a field in our form. This involves using sessions
            in Cypht:</p>
        <p class="highlight-text">In <span
                class="highlight-secondary">core/handler_modules.php</span>:</p>
        <code class="code-block">
            <span class="default-text">$this->session->set('key', 'value');</span>
        </code>
        <p>Our code will look like this:</p>
        <p class="highlight-text">In <span class="highlight-secondary">core/handler_modules.php</span>:</p>
        <code class="code-block">
            <span class="function-keyword">class Hm_Handler_process_test_third_div</span> extends Hm_Handler_Module {<br>
            <span class="function-keyword">/**</span><br>
            <span class="function-keyword"> * If "stay logged in" is checked, set the session lifetime</span><br>
            <span class="function-keyword"> */</span><br>
            <span class="function-keyword">   public function process()</span> {<br>
            <span class="default-text">    list($success, $form) = $this->process_form(array('new_tag_name'));</span><br>
            <span class="default-text">    if ($success && $form['new_tag_name']) {</span><br>
            <span class="default-text">        $this->session->set('tag_name', $form['new_tag_name']);</span><br>
            <span class="default-text">    }</span><br>
            <span class="function-keyword">  }</span><br>
            <span class="function-keyword"> }</span>
        </code>
        <p>Remember: to retrieve our stored data, we need another handler, and it must be placed after the handlers
            that store the data; otherwise, it may cause malfunctions.</p>
        <p class="highlight-text">In <span class="highlight-secondary">core/setup.php</span>:</p>
        <code class="code-block">
            <span class="default-text">add_handler('test', 'get_test_third_div', true, 'core', 'load_user_data', 'after');</span>
        </code>
        <p>To retrieve an element from the session, we will do it like this:</p>
        <code class="code-block">
            <span class="default-text">$res = $this->session->get('key', 'Default Value');</span>
        </code>
        <p>Let's also define the module in <span class="code-badge">handler_modules.php</span></p>
        <p class="highlight-text">In <span
                class="highlight-secondary">core/handler_modules.php</span>:</p>
        <code class="code-block">
            <span class="function-keyword">class Hm_Handler_get_test_third_div</span> extends Hm_Handler_Module {<br>
            <span class="function-keyword">/**</span><br>
            <span class="function-keyword"> * If "stay logged in" is checked, set the session lifetime</span><br>
            <span class="function-keyword"> */</span><br>
            <span class="function-keyword">public function process()</span> {<br>
            <span class="default-text">    $res = $this->session->get('tag_name', 'Tag name');</span><br>
            <span class="default-text">    if(!is_null($res)) {</span><br>
            <span class="default-text">        $this->out('tag_name', $res);</span><br>
            <span class="default-text">        // we can now delete session as we do not need no more</span><br>
            <span class="default-text">        $this->session->del('tag_name');</span><br>
            <span class="default-text">    }</span><br>
            <span class="function-keyword"> }</span><br>
            <span class="function-keyword">}</span>
        </code>
        <p>This is how you can delete an element from the session</p>
        <code class="code-block">
            <span class="default-text">$this->session->del('key');</span>
        </code>
        <p>In the <b>Hm_Handler_get_test_third_div</b> module, we will never encounter a null value because we provided a
            default. Therefore, the <b>is_null</b> condition is unnecessary. We use $this->out('tag_name', $res); to pass
            our data to the output. To retrieve it from the output, we will do it like this:</p>
        <code class="code-block">
            <span class="default-text">$this->get('key');</span>
        </code>
        <p>We will have to edit our class <code>Hm_Output_test_third_div</code> like this:</p>
        <p class="highlight-text">In <span class="highlight-secondary">core/output_modules.php</span>:
        </p>
        <code class="code-block">
            <span class="function-keyword">class Hm_Output_test_third_div</span> extends Hm_Output_Module {<br>
            <span class="function-keyword">protected function output()</span> {<br>
            <span class="default-text">    $tag_name  = $this->get('tag_name');</span><br>
            <span class="default-text">    return '&lt;div class="nux_help mt-3 col-lg-12 col-md-12 col-sm-12"&gt;'.</span><br>
            <span class="default-text">                '&lt;div class="card"&gt;'.</span><br>
            <span class="default-text">                    '&lt;div class="card-body"&gt;'.</span><br>
            <span class="default-text">                        '&lt;div class="card_title"&gt;&lt;h4&gt;'.$this-&gt;trans('Test Our Form').'&lt;/h4&gt;&lt;/div&gt;'.</span><br>
            <span class="default-text">                        '&lt;form class="add_server me-0" method="POST" action="?page=test"&gt;'.</span><br>
            <span class="default-text">                            '&lt;input type="hidden" name="hm_page_key" value="'.$this-&gt;'.</span><br>
            <span class="default-text">                            'html_safe(Hm_Request_Key::generate()).'" /&gt;'.</span><br>
            <span class="default-text">                            '&lt;div class="subtitle mt-4"&gt;'.$tag_name.'&lt;/div&gt;'.</span><br>
            <span class="default-text">                            '&lt;div class="form-floating mb-3"&gt;'.</span><br>
            <span class="default-text">                                '&lt;input required type="text" id="new_tag_name" name="new_tag_name".</span><br>
            <span class="default-text">                                  'class="txt_fld form-control" value="" placeholder="'.$this-&gt;'.</span><br>
            <span class="default-text">                                   'trans('Tag name').'" /&gt;'.</span><br>
            <span class="default-text">                                '&lt;label class="" for="new_tag_name"&gt;'.$tag_name.'&lt;/label&gt;'.</span><br>
            <span class="default-text">                            '&lt;/div&gt;'.</span><br>
            <span class="default-text">                            '&lt;input type="submit" class="btn btn-primary px-5" value="'.$this-&gt;.</span><br>
            <span class="default-text">                             trans('Add').'" name="submit_tag" /&gt;'.</span><br>
            <span class="default-text">                        '&lt;/form&gt;'.</span><br>
            <span class="default-text">                    '&lt;/div&gt;'.</span><br>
            <span class="default-text">                '&lt;/div&gt;'.</span><br>
            <span class="default-text">            '&lt;/div&gt;';</span><br>
            <span class="function-keyword"> }</span><br>
            <span class="function-keyword">}</span>
        </code>
        <p>Result before:</p>
        <img src="/img/screenshots/7.png" style="width:100%; margin-bottom: 10px;"/>
        <p>Result after:</p>
        <img src="/img/screenshots/8.png" style="width:100%; margin-bottom: 10px;"/>
        <h3 class="bold-title"><b>Practical Example: 2. How to add new settings</b></h3>
        <p>Let's start by adding a simple parameter and then we'll see how to add another section after.</p>
        <p>We will add our setting after this content:</p>
        <p class="highlight-text">On page settings</p>
        <code class="code-block">
            <span class="default-text">Default message sort order</span>
        </code>
        <img src="/img/screenshots/9.png" style="width:100%; margin-bottom: 10px;"/>
        <p>We will need a handle and an output for that:</p>
        <p class="highlight-text">In <span class="highlight-secondary">core/setup.php</span>:</p>
        <code class="code-block">
            <span class="function-keyword">add_handler</span>('settings', 'process_test_enable_tag_with_parent', true, 'tags', 'save_user_settings', 'before');<br>
            <span class="function-keyword">add_output</span>('settings', 'test_enable_tag_with_parent_setting', true, 'tags', 'default_sort_order_setting', 'after');
        </code>
        <p><b>default_sort_order_setting</b> is the output for 'Default message sort order.' When adding an output, we need
            to specify its position. In this case, we want to place it after <b>default_sort_order_setting</b>. The
            <b>process_test_enable_tag_with_parent_setting</b> must come before <b>save_user_settings</b> since we need to save it
            as well. Thus, our configuration process will be applied and saved before handling <b>save_user_settings</b>.
        </p>
        <p>Now that we’ve defined our routes, we need to write the module for processing:
            <b>process_test_enable_tag_with_parent_setting</b> for the handle and <b>test_enable_tag_with_parent_setting</b> for
            the output.</p>
        <p class="highlight-text">In <span class="highlight-secondary">module.php</span>:</p>
        <code class="code-block">
            <span class="function-keyword">/**</span><br>
            <span class="default-text"> * @subpackage tags/handler</span><br>
            <span class="function-keyword"> */</span><br>
            <span class="function-keyword">class Hm_Handler_process_test_enable_tag_with_parent_setting</span> extends Hm_Handler_Module {<br>
            <span class="function-keyword">public function process()</span> {<br>
            <span class="default-text">    function test_tag_with_parent_enabled_callback($val) { return $val; }</span><br>
            <span class="default-text">    process_site_setting('test_enable_tag_with_parent', $this, 'test_tag_with_parent_enabled_callback', true, true);</span><br>
            <span class="function-keyword"> }</span><br>
            <span class="function-keyword">}</span>
        </code>
        <p>and this is the corresponding output:</p>
        <p class="highlight-text">In <span class="highlight-secondary">module.php</span>:</p>
        <code class="code-block">
            <span class="function-keyword">/**</span><br>
            <span class="default-text"> * @subpackage tags/output</span><br>
            <span class="function-keyword"> */</span><br>
            <span class="function-keyword">class Hm_Output_test_enable_tag_with_parent_setting</span> extends Hm_Output_Module {<br>
            <span class="function-keyword">protected function output()</span> {<br>
            <span class="default-text">    $settings = $this->get('user_settings');</span><br>
            <span class="default-text">    if (array_key_exists('test_enable_tag_with_parent', $settings) && $settings['test_enable_tag_with_parent']) {</span><br>
            <span class="default-text">        $checked = ' checked="checked"';</span><br>
            <span class="default-text">        $reset = '';</span><br>
            <span class="default-text">    }</span><br>
            <span class="default-text">    else {</span><br>
            <span class="default-text">        $checked = '';</span><br>
            <span class="default-text">        $reset = '<span class="tooltip_restore" restore_aria_label="Restore default value"><i class="bi bi-arrow-repeat refresh_list reset_default_value_checkbox"></i></span>';</span><br>
            <span class="default-text">    }</span><br>
            <span class="default-text">    return '&lt;tr class="general_setting"&gt;&lt;td&gt;&lt;label class="form-check-label" for="test_enable_tag_with_parent"&gt;'.</span><br>
            <span class="default-text">        $this->trans('Test Tag enable parent').'</label></td>'.</span><br>
            <span class="default-text">        '&lt;td&gt;&lt;input class="form-check-input" type="checkbox" '.$checked.</span><br>
            <span class="default-text">        ' value="1" id="test_enable_tag_with_parent" name="test_enable_tag_with_parent" /&gt;'.$reset.'</td&gt;&lt;/tr&gt;';</span><br>
            <span class="function-keyword"> }</span><br>
            <span class="function-keyword">}</span>
        </code>
        <p><b>reset_default_value_checkbox</b> class here <span class="tooltip_restore"
                restore_aria_label="Restore default value"><i
                    class="bi bi-arrow-repeat refresh_list reset_default_value_checkbox"></i></span> is being used
            in js (module core site.js) to restore the default value at line:</p>
        <p class="highlight-text">In <span class="highlight-secondary">core/site.js</span>:</p>
        <code class="code-block">
            <span class="default-text">$('.reset_default_value_checkbox').on("click", reset_default_value_checkbox);</span>
        </code>
        <p>Remember, if you make changes, you need to define the restore action in JavaScript, as this can occur in
            various scenarios.</p>
        <p>You can now refresh your page to see the result:</p>
        <img src="/img/screenshots/10.png" style="width:100%; margin-bottom: 10px;"/>
        <p>You might be wondering why updating our parameter gives an unexpected result; this is normal. Let me
            explain: remember the crucial concepts in Cypht related to authorizations and validations (such as
            allowed_pages, allowed_output, allowed_post, etc.). In this case, we need to authorize our
            test_enable_tag_with_parent field in POST.</p>
        <p class="highlight-text">In <span class="highlight-secondary">core/setup.php</span>:</p>
        <code class="code-block">
            <span class="default-text">'allowed_post' => array(</span><br>
            <span class="default-text">    'test_enable_tag_with_parent' => FILTER_VALIDATE_INT</span><br>
            <span class="default-text">)</span>
        </code>
        <p>By adding this permission, the display will remain unchanged, but the update will work as intended. To
            access this setting in Cypht, use the usual syntax:</p>
        <p class="highlight-text">In <span class="highlight-secondary">core/setup.php</span>:</p>
        <code class="code-block">
            <span class="default-text">$this->user_config->get('test_enable_tag_with_parent_setting')</span>
        </code>
        <p>Now that we know how to add a simple setting, let's explore how to add a section to the settings page:
        </p>
        <img src="/img/screenshots/11.png" style="width:100%; margin-bottom: 10px;"/>
        <p>The goal is to add a new section to our settings page. Here’s how:</p>
        <img src="/img/screenshots/13.jpg" style="width:100%; margin-bottom: 10px;"/>
        <p>In the image above, our section contains two elements, so we will define two handles to process them,
            along with three outputs: one for the section title, one for the first element, and another for the
            second element.</p>
        <p class="highlight-text">In <span class="highlight-secondary">tags/setup.php</span>:</p>
        <code class="code-block">
            <span class="function-keyword">add_handler</span>('settings', 'process_tag_source_max_setting', true, 'tags', 'load_user_data', 'after');<br>
            <span class="function-keyword">add_handler</span>('settings', 'process_tag_since_setting', true, 'tags', 'load_user_data', 'after');<br>
            <span class="function-keyword">add_output</span>('settings', 'start_tag_settings', true, 'tags', 'sent_source_max_setting', 'after');<br>
            <span class="function-keyword">add_output</span>('settings', 'tag_since_setting', true, 'tags', 'start_tag_settings', 'after');<br>
            <span class="function-keyword">add_output</span>('settings', 'tag_per_source_setting', true, 'tags', 'tag_since_setting', 'after');
        </code>
        <p>We can now add modules, let's start with process_tag_source_max_setting:</p>
        <p class="highlight-text">In <span class="highlight-secondary">tags/modules.php</span>:</p>
        <code class="code-block">
            <span class="function-keyword">/**</span><br>
            <span class="default-text"> * Process "tag_per_source" setting for the tag page in the settings page</span><br>
            <span class="default-text"> * @subpackage core/handler</span><br>
            <span class="function-keyword"> */</span><br>
            <span class="function-keyword">class Hm_Handler_process_tag_source_max_setting</span> extends Hm_Handler_Module {<br>
            <span class="function-keyword">/**</span><br>
            <span class="default-text"> * Allowed values are greater than zero and less than MAX_PER_SOURCE</span><br>
            <span class="function-keyword"> */</span><br>
            <span class="function-keyword">public function process()</span> {<br>
            <span class="default-text">    process_site_setting('tag_per_source', $this, 'max_source_setting_callback', DEFAULT_PER_SOURCE);</span><br>
            <span class="function-keyword"> }</span><br>
            <span class="function-keyword">}</span>
        </code>
        <p>and for process_tag_since_setting:</p>
        <p class="highlight-text">In <span class="highlight-secondary">tags/modules.php</span>:</p>
        <code class="code-block">
            <span class="function-keyword">/**</span><br>
            <span class="default-text"> * Process "since" setting for the junk page in the settings page</span><br>
            <span class="default-text"> * @subpackage core/handler</span><br>
            <span class="function-keyword"> */</span><br>
            <span class="function-keyword">class Hm_Handler_process_tag_since_setting</span> extends Hm_Handler_Module {<br>
            <span class="function-keyword">/**</span><br>
            <span class="default-text"> * valid values are defined in the process_since_argument function</span><br>
            <span class="function-keyword"> */</span><br>
            <span class="function-keyword">public function process()</span> {<br>
            <span class="default-text">    process_site_setting('tag_since', $this, 'since_setting_callback');</span><br>
            <span class="function-keyword"> }</span><br>
            <span class="function-keyword">}</span>
        </code>
        <p>That's all for our handles, we need to add output modules too; let's start with "start_tag_settings":</p>
        <p class="highlight-text">In <span class="highlight-secondary">tags/modules.php</span>:</p>
        <code class="code-block">
            <span class="function-keyword">/**</span><br>
            <span class="default-text"> * Starts the Tag section on the settings page</span><br>
            <span class="default-text"> * @subpackage core/output</span><br>
            <span class="function-keyword"> */</span><br>
            <span class="function-keyword">class Hm_Output_start_tag_settings</span> extends Hm_Output_Module {<br>
            <span class="function-keyword">/**</span><br>
            <span class="default-text"> * Settings in this section control the tag messages view</span><br>
            <span class="function-keyword"> */</span><br>
            <span class="function-keyword">protected function output()</span> {<br>
            <span class="default-text">    $res = '<tr><td data-target=".tag_setting" colspan="2" class="settings_subtitle cursor-pointer border-bottom p-2">'.</span><br>
            <span class="default-text">        '<i class="bi bi-tags fs-5 me-2"></i>'.</span><br>
            <span class="default-text">        $this->trans('Tags').'</td></tr>';</span><br>
            <span class="default-text">        print_r($res);</span><br>
            <span class="default-text">    return $res;</span><br>
            <span class="function-keyword"> }</span><br>
            <span class="function-keyword">}</span>
        </code>
        <p>for "tag_since_setting" add:</p>
        <p class="highlight-text">In <span class="highlight-secondary">tags/modules.php</span>:</p>
        <code class="code-block">
            <span class="function-keyword">/**</span><br>
            <span class="default-text"> * Option for the "junk since" date range for the Junk page</span><br>
            <span class="default-text"> * @subpackage core/output</span><br>
            <span class="function-keyword"> */</span><br>
            <span class="function-keyword">class Hm_Output_tag_since_setting</span> extends Hm_Output_Module {<br>
            <span class="function-keyword">/**</span><br>
            <span class="default-text"> * Processed by Hm_Handler_process_tag_since_setting</span><br>
            <span class="function-keyword"> */</span><br>
            <span class="function-keyword">protected function output()</span> {<br>
            <span class="default-text">    $since = DEFAULT_SINCE;</span><br>
            <span class="default-text">    $settings = $this->get('user_settings', array());</span><br>
            <span class="default-text">    if (array_key_exists('tag_since', $settings) && $settings['tag_since']) {</span><br>
            <span class="default-text">        $since = $settings['tag_since'];</span><br>
            <span class="default-text">    }</span><br>
            <span class="default-text">    return '<tr class="tag_setting"><td><label for="tag_since">'.</span><br>
            <span class="default-text">        $this->trans('Show junk messages since').'</label></td>'.</span><br>
            <span class="default-text">        '<td>'.message_since_dropdown($since, 'tag_since', $this).'</td></tr>';</span><br>
            <span class="function-keyword"> }</span><br>
            <span class="function-keyword">}</span>
        </code>
        <p>and for "tag_per_source_setting" add:</p>
        <p class="highlight-text">In <span class="highlight-secondary">tags/modules.php</span>:</p>
        <code class="code-block">
            <span class="function-keyword">/**</span><br>
            <span class="default-text"> * Option for the maximum number of messages per source for the Junk page</span><br>
            <span class="default-text"> * @subpackage core/output</span><br>
            <span class="function-keyword"> */</span><br>
            <span class="function-keyword">class Hm_Output_tag_per_source_setting</span> extends Hm_Output_Module {<br>
            <span class="function-keyword">/**</span><br>
            <span class="default-text"> * Processed by Hm_Handler_process_tag_source_max_setting</span><br>
            <span class="function-keyword"> */</span><br>
            <span class="function-keyword">protected function output()</span> {<br>
            <span class="default-text">    $sources = DEFAULT_PER_SOURCE;</span><br>
            <span class="default-text">    $settings = $this->get('user_settings', array());</span><br>
            <span class="default-text">    $reset = '';</span><br>
            <span class="default-text">    if (array_key_exists('tag_per_source', $settings)) {</span><br>
            <span class="default-text">        $sources = $settings['tag_per_source'];</span><br>
            <span class="default-text">    }</span><br>
            <span class="default-text">    if ($sources != 20) {</span><br>
            <span class="default-text">        $reset = '<span class="tooltip_restore" restore_aria_label="Restore default value"><i class="bi bi-arrow-repeat refresh_list reset_default_value_input"></i></span>';</span><br>
            <span class="default-text">    }</span><br>
            <span class="default-text">    return '&lt;tr class="tag_setting"&gt;&lt;td&gt;&lt;label for="tag_per_source"&gt;'.</span><br>
            <span class="default-text">        $this->trans('Max messages per source').'&lt;/label&gt;&lt;/td&gt;'.</span><br>
            <span class="default-text">        '&lt;td class="d-flex"&gt;&lt;input type="text" size="2" class="form-control form-control-sm w-auto" </span>
            <span class="default-text">        id="tag_per_source" name="tag_per_source" value="'.$this->html_safe($sources).'" /&gt;'.$reset.'&lt;/td&gt;&lt;/tr&gt;';</span><br>
            <span class="function-keyword"> }</span><br>
            <span class="function-keyword">}</span>
        </code>
        <p>And there you have it! Refresh your page to see the result:</p>
        <img src="/img/screenshots/12.png" style="width:100%; margin-bottom: 10px;"/>
    </div>
    <br/><br/>
    <h3>Related links:</h3>
    <a href="https://github.com/dovecot/imaptest/wiki/About">https://github.com/dovecot/imaptest/wiki/About</a><br>
    <a href="https://jmap.io/spec.html">https://jmap.io/spec.html</a><br>
    <a href="http://sieve.info/">http://sieve.info/</a><br>
    <a href="https://p5r.uk/blog/2011/sieve-tutorial.html">https://p5r.uk/blog/2011/sieve-tutorial.html</a><br>
    <a href="https://www.fastmail.com/help/technical/sieve.html">https://www.fastmail.com/help/technical/sieve.html</a><br>
    <a href="https://docs.gandi.net/en/gandimail/sieve/sieve_tutorial.html">https://docs.gandi.net/en/gandimail/sieve/sieve_tutorial.html</a>
</main>
