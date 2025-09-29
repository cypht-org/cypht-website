---
title: Install
exclude: true
---
<section>
    <h2>Install Cypht</h2>
    <p>Cypht has four differents installation ways:</p>
    <ul>
        <li>Manual installation</li>
        <li>Installation within Tiki</li>
        <li>Install using Docker (use cypht docker image)</li>
        <li>Install cypht on a YunoHost server</li>
    </ul>
    <hr>

    <h2>1. Manual installation</h2>
    <h2>Requirements</h2>
    <p>

            <a href="https://github.com/cypht-org/cypht/tree/1.4.x">Cypht 1.4.x</a> requires PHP 5.6 to 7.4. For PHP 8.1+, please use <a href="https://github.com/cypht-org/cypht/tree/2.x">Cypht 2.x+</a>, <a href="https://getcomposer.org/">Composer 2</a>, and at minimum the
            <a href="http://php.net/manual/en/book.openssl.php">OpenSSL</a>, <a
                href="http://php.net/manual/en/book.mbstring.php">mbstring</a> and <a
                href="http://php.net/manual/en/book.curl.php">cURL</a> extensions. Cypht can also leverage several other
            extensions as defined in <a href="https://github.com/cypht-org/cypht/blob/1.4.x/composer.json#L37-L44">composer.json</a>.
            Testing is done on <a href="https://www.debian.org/">Debian</a> and <a href="http://www.ubuntu.com/">Ubuntu</a>
            platforms with <a href="http://nginx.com/">Nginx</a> and <a href="http://httpd.apache.org/">Apache</a>.
    </p>
    <p>Before proceeding please make sure your system meets minimal requirements</p>
    <h2>Steps</h2>
    <h4>1. Check minimum requirements</h4>

    <pre>
        #!/bin/bash
        # You need to check php version. For Cypht version 1.4.x, ensure PHP version is between 5.6 and 7.4, while for version 2.x.x, PHP 8.1 or higher is required.
        php --version
        # List installed PHP extensions. at least OpenSSL, mbstring and cURL should be in the list
        php -m
        # For PHP 8.4 if there is missing php_imap extension is deprecated and unmaintained - see [php watch](https://php.watch/versions/8.4/imap-unbundled) and [GitHub repo](https://github.com/php/pecl-mail-imap), please download(to https://pecl.php.net/package/imap/1.0.3/windows) and add it manually(adding to php-8.4.4\ext and uncommenting ;extension=imap in php.ini), particularly for Windows users who won't be able to log in Cypht without that extension installed.
        # Next you need to check composer version which should be >=2.0.0
        composer --version
    </pre>

    <h4>2. Download and prepare the code</h4>
    <p>
        It's important to consider where you place the Cypht source.
        The web server will need read-only access to it, and moving it from one place to another requires re-running the configuration script.
        Do <b>not</b> put the source in the document root as it could create a security risk.
        On Debian systems, it's common to place the source in the "/usr/local/share/" sub-directory for such cases.
        The provided bash script downloads installs (installs and/or upgrades <a href="#" type="button" data-toggle="modal" data-target="#serviceProviderModal">check</a>) the specified version of Cypht, prepares the necessary directories, sets up correct permissions and ownership, and places the Cypht source in "/usr/local/share/cypht/cypht-version".
        It also ensures that the required configuration files are created, such as .env or hm3.ini (depending on the version).
        The script requires sudo access to perform these actions:
    </p>
    

    <div class="modal fade" id="serviceProviderModal" tabindex="-1" role="dialog" aria-labelledby="serviceProviderModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title" id="serviceProviderModalLabel">INSTALL/UPGRADE SCRIPT</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <ul class="nav nav-tabs" id="myTab-upgrade" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="upgrade-linux-tab" data-toggle="tab" href="#upgrade-linux" role="tab" aria-controls="upgrade-linux" aria-selected="true">Linux</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="upgrade-windows-tab" data-toggle="tab" href="#upgrade-windows" role="tab" aria-controls="upgrade-windows" aria-selected="true">Windows</a>
                        </li>
                        
                    </ul>
                    <div class="tab-content" id="upgradeContent" style="max-height:600px; overflow-y: auto;">
                        <div class="tab-pane fade show active" id="upgrade-linux" role="tabpanel" aria-labelledby="upgrade-linux-tab">
                            <pre>
        #!/bin/bash

        bold_green() {
            echo -e "\033[1m\033[32m✓ $1\033[0m"
        }

        bold_red() {
            echo -e "\033[1m\033[31m$1\033[0m"
        }

        bold_blue() {
            echo -e "\033[1m\033[34m$1\033[0m"
        }

        bold_yellow() {
            echo -e "\033[1m\033[33m$1\033[0m"
        }

        # Function to check prerequisites
        check_prerequisites() {
            echo "Checking prerequisites..."

            # Check if jq is installed (needed for version parsing)
            if ! command -v jq &>/dev/null; then
                bold_red "Error: jq is not installed but required to fetch versions."
                bold_red "Please install it with:"
                bold_blue "  sudo apt update && sudo apt install jq"
                exit 1
            fi

            # Check if PHP is installed
            if ! command -v php &>/dev/null; then
                bold_red "Error: PHP is not installed or not in the system PATH."
                bold_red "Please install PHP before proceeding."
                exit 1
            fi

            # Print the PHP version
            bold_green "PHP is installed."

            # List installed PHP extensions
            required_extensions=("openssl" "mbstring" "curl" "session" "dom" "fileinfo" "filter" "gd" "mysqli" "phar" "simplexml" "soap" "tokenizer" "xml" "xmlwriter" "zlib")
            missing_extensions=()

            for ext in "${required_extensions[@]}"; do
                if ! php -m | grep -iq "$ext"; then
                    missing_extensions+=("$ext")
                fi
            done

            if [ ${#missing_extensions[@]} -gt 0 ]; then
                bold_red "Error: The following required PHP extensions are missing: ${missing_extensions[*]}"
                bold_red "Please install the missing extensions before proceeding."
                exit 1
            else
                bold_green "All required PHP extensions (OpenSSL, mbstring, cURL, session, dom, fileinfo, filter, gd, mysqli, phar, simplexml, soap, tokenizer, xml, xmlwriter, zlib) are installed."
            fi

            # Check if Composer is installed
            if ! command -v composer &>/dev/null; then
                bold_red "Error: Composer is not installed or not in the system PATH."
                bold_red "Please install Composer before proceeding: https://getcomposer.org/download/"
                exit 1
            fi

            # Print the Composer version
            bold_green "Composer is installed.\n"
        }

        # Function to fetch the list of valid tags from the GitHub repository (version 2.x.y and above only)
        fetch_tags() {
            echo "Fetching latest versions from GitHub..." >&2
            curl -s https://api.github.com/repos/cypht-org/cypht/releases | \
            jq -r '.[] | .tag_name' | sort -V | \
            awk -F. '
            {
                # Extract major version number (e.g., "2" from "v2.x.y")
                major = substr($1, 2)
                # Only include version 2.x.y and above
                if (major >= 2) {
                    print $0
                }
            }' | sort -Vr | head -20  # Show latest 20 versions, newest first
        }

        # Function to install/upgrade Cypht for a given version
        install_cypht() {
            local version=$1
            local previous_version=$2
            local destination="$BASE_DIR/cypht-$version"
            local previous_destination="$BASE_DIR/cypht-$previous_version"
            local temp_dir=$(mktemp -d)

            # Check if this is an upgrade (previous version exists)
            if [ -n "$previous_version" ] && [ -d "$previous_destination" ]; then
                bold_yellow "Upgrading from $previous_version to $version..."
                
                # Backup .env file from previous version
                if [ -f "$previous_destination/.env" ]; then
                    bold_blue "Backing up .env file from previous version..."
                    cp "$previous_destination/.env" "$temp_dir/.env.backup"
                    bold_green "Backed up .env file from $previous_version"
                fi
                
                # Backup config directory from previous version if it exists
                if [ -d "$previous_destination/config" ]; then
                    bold_blue "Backing up config directory from previous version..."
                    cp -r "$previous_destination/config" "$temp_dir/config.backup"
                    bold_green "Backed up config directory from $previous_version"
                fi
                
                # Remove previous installation
                bold_blue "Removing previous version $previous_version..."
                sudo rm -rf "$previous_destination"
                bold_green "Removed $previous_destination"
            fi

            # Create destination directory
            bold_blue "Installing Cypht version $version..."
            sudo mkdir -p "$destination"

            # Create temporary working directory
            cd "$temp_dir" || exit 1

            # Download the selected version of Cypht
            bold_blue "Downloading version $version..."
            wget "https://github.com/cypht-org/cypht/archive/refs/tags/$version.zip" -O "$version.zip"

            if [ $? -ne 0 ]; then
                bold_red "Error downloading version $version."
                exit 1
            fi

            # Unpack the archive
            bold_blue "Unpacking the archive...\n"
            unzip "$version.zip"

            if [ $? -ne 0 ]; then
                bold_red "Error unpacking the archive."
                exit 1
            fi

            # Run composer in the extracted folder
            cd "cypht-${version#v}" || exit 1
            bold_blue "Installing dependencies with composer...\n"
            composer install --no-dev --optimize-autoloader

            # Restore .env file from backup if this is an upgrade
            if [ -n "$previous_version" ] && [ -f "$temp_dir/.env.backup" ]; then
                bold_blue "Restoring .env file from previous version..."
                cp "$temp_dir/.env.backup" ".env"
                bold_green "Restored .env file from $previous_version"
            else
                # Create .env file from example for new installations
                bold_blue "Creating .env from .env.example...\n"
                cp .env.example .env
            fi

            # Fix permissions and ownership
            bold_blue "Fixing permissions...\n"
            find . -type d -exec chmod 755 {} \;
            find . -type f -exec chmod 644 {} \;

            # Ask for group (root is default for other systems, or user for macOS)
            read -p "Enter the group to own the files [root]: " group
            group="${group:-root}"

            sudo chown -R root:"$group" .

            # Move files to the destination folder
            bold_blue "Copying files to $destination...\n"
            sudo mv ./* ./.[!.]* "$destination" 2>/dev/null || true

            # Clean up temporary directory
            cd /tmp
            sudo rm -rf "$temp_dir"

            if [ $? -ne 0 ]; then
                bold_red "Error moving files to $destination."
                exit 1
            fi
            
            bold_green "Cypht $version installed successfully to $destination"
            
            # Display upgrade notes if this was an upgrade
            if [ -n "$previous_version" ]; then
                echo
                bold_green "Process completed successfully!"
                bold_green "Upgrade from $previous_version to $version completed."
                bold_yellow "Please check the Cypht documentation for any additional upgrade steps:"
                bold_blue "https://www.cypht.org/install/"
            else
                bold_green "Process completed successfully!"
                bold_green "Cypht $version has been installed successfully."
                bold_yellow "Please check the Cypht documentation for configuration:"
                bold_blue "https://www.cypht.org/install/"
            fi
        }

        # Function to detect existing installations
        detect_existing_installations() {
            local base_dir=$1
            local existing_installs=()
            
            if [ -d "$base_dir" ]; then
                for dir in "$base_dir"/cypht-*; do
                    if [ -d "$dir" ]; then
                        local version=$(basename "$dir" | sed 's/cypht-//')
                        existing_installs+=("$version")
                    fi
                done
            fi
            
            printf '%s\n' "${existing_installs[@]}"
        }

        # Function to compare versions
        version_gt() {
            local v1=$1
            local v2=$2
            # Remove 'v' prefix for comparison
            v1=${v1#v}
            v2=${v2#v}
            
            # Use sort -V to compare versions
            [ "$(printf "%s\n" "$v1" "$v2" | sort -V | tail -n1)" = "$v1" ] && [ "$v1" != "$v2" ]
        }

        # Main script execution

        # Check prerequisites
        check_prerequisites

        # Set base directory
        read -p "Enter the base directory for Cypht installation [/usr/local/share/cypht]: " BASE_DIR
        BASE_DIR="${BASE_DIR:-/usr/local/share/cypht}"

        # Detect existing installations
        existing_versions=($(detect_existing_installations "$BASE_DIR"))

        if [ ${#existing_versions[@]} -gt 0 ]; then
            bold_yellow "Found existing Cypht installations:"
            for i in "${!existing_versions[@]}"; do
                echo "$((i+1)). cypht-${existing_versions[$i]}"
            done
            echo
            read -p "Do you want to upgrade an existing installation? (yes/no) [yes]: " upgrade_choice
            upgrade_choice="${upgrade_choice:-yes}"
            
            if [[ "$upgrade_choice" == "yes" ]]; then
                if [ ${#existing_versions[@]} -eq 1 ]; then
                    selected_previous_version="${existing_versions[0]}"
                    bold_blue "Upgrading the only existing installation: $selected_previous_version"
                else
                    read -p "Enter the number of the installation to upgrade: " upgrade_number
                    if [[ "$upgrade_number" =~ ^[0-9]+$ ]] && [ "$upgrade_number" -le ${#existing_versions[@]} ]; then
                        selected_previous_version="${existing_versions[$((upgrade_number-1))]}"
                        bold_blue "Selected version for upgrade: $selected_previous_version"
                    else
                        bold_red "Invalid selection."
                        exit 1
                    fi
                fi
                
                # Fetch available newer versions
                bold_blue "Checking for available upgrades..."
                available_versions=$(fetch_tags)
                
                # Filter versions newer than the current one
                upgrade_candidates=()
                while IFS= read -r version; do
                    if version_gt "$version" "$selected_previous_version"; then
                        upgrade_candidates+=("$version")
                    fi
                done <<< "$available_versions"
                
                if [ ${#upgrade_candidates[@]} -eq 0 ]; then
                    bold_green "No newer versions available. Your installation is up to date."
                    exit 0
                fi
                
                echo
                bold_yellow "Available upgrades for $selected_previous_version:"
                for i in "${!upgrade_candidates[@]}"; do
                    echo "$((i+1)). ${upgrade_candidates[$i]}"
                done
                
                read -p "Enter the version number to upgrade to: " version_choice
                if [[ "$version_choice" =~ ^[0-9]+$ ]] && [ "$version_choice" -le ${#upgrade_candidates[@]} ]; then
                    new_version="${upgrade_candidates[$((version_choice-1))]}"
                else
                    bold_red "Invalid version choice."
                    exit 1
                fi
                
                # Perform upgrade
                install_cypht "$new_version" "$selected_previous_version"
                exit 0
            fi
        fi

        # New installation
        bold_blue "Proceeding with new installation..."

        # Fetch available version tags (v2.x.y and above only)
        available_versions=$(fetch_tags)

        if [ -z "$available_versions" ]; then
            bold_red "No version 2.x.y or above found available for installation."
            exit 1
        fi

        # Display available versions
        echo
        bold_yellow "Available Cypht versions (v2.x.y and above):"
        available_versions_array=($available_versions)
        for i in "${!available_versions_array[@]}"; do
            echo "$((i+1)). ${available_versions_array[$i]}"
        done

        # Prompt user to select a version
        read -p "Enter the version number to install: " version_choice
        if [[ "$version_choice" =~ ^[0-9]+$ ]] && [ "$version_choice" -le ${#available_versions_array[@]} ]; then
            selected_version="${available_versions_array[$((version_choice-1))]}"
        else
            bold_red "Error: Invalid version choice. Please select a valid number from the list."
            exit 1
        fi

        bold_blue "Installing version: $selected_version"
        install_cypht "$selected_version" ""

                            </pre>
                        </div>
                        <div class="tab-pane fade show" id="upgrade-windows" role="tabpanel" aria-labelledby="upgrade-windows-tab">
                            <h4>Download and prepare the code</h4>
                            <p>
                                For Windows, you need to have Two different files: <i>"install-cypht.bat"</i> and <i>"cypht-windows.ps1"</i>.<br />
                                Once the code is in both files, to start the installation, you need to run "install-cypht.bat".
                            </p>
                            <h5>install-cypht.bat</h5>
                            <pre>
    @echo off

    setlocal EnableDelayedExpansion

    echo Cypht Installer for Windows
    echo ==========================
    echo.

    REM Check if PowerShell is available
    powershell -Command "Write-Host 'PowerShell is available'" >nul 2>&1
    if %ERRORLEVEL% neq 0 (
        echo ERROR: PowerShell is not available on this system.
        echo Please install PowerShell or run the script manually.
        pause
        exit /b 1
    )


    REM Check if the PowerShell script exists
    if not exist "cypht-windows.ps1" (
        echo ERROR: cypht-windows.ps1 not found in current directory.
        echo This batch file requires the PowerShell script to be present.
        echo.
        echo Please ensure both files are in the same directory:
        echo   - install-cypht.bat
        echo   - cypht-windows.ps1
        echo.
        pause
        exit /b 1
    )

    echo Starting Cypht installer...
    echo.

    REM Execute the PowerShell script with parameters and proper console handling
    if "%~1"=="" (
        powershell -ExecutionPolicy Bypass -NoLogo -File "cypht-windows.ps1"
    ) else (
        powershell -ExecutionPolicy Bypass -NoLogo -File "cypht-windows.ps1" -BaseDir "%~1"
    )

    REM Check the exit code
    if %ERRORLEVEL% equ 0 (
        echo.
        echo Installation completed successfully!
    ) else (
        echo.
        echo Installation failed with error code: %ERRORLEVEL%
    )

    echo.
    pause
    exit /b %ERRORLEVEL%


                            </pre>

                            <h5>cypht-windows.ps1</h5>
                            <pre>
    param(
        [string]$BaseDir = "",
        [switch]$Help
    )

    if ($Help) {
        Write-Host "Cypht Installer/Upgrader for Windows" -ForegroundColor Cyan
        Write-Host "Usage: .\cypht-windows.ps1 [-BaseDir <path>] [-Help]" -ForegroundColor Yellow
        Write-Host "  -BaseDir: Base directory for Cypht installation (optional - will prompt if not provided)"
        Write-Host "  -Help: Show this help message"
        Write-Host ""
        Write-Host "Examples:" -ForegroundColor Cyan
        Write-Host "  .\cypht-windows.ps1                    # Interactive mode - prompts for directory"
        Write-Host "  .\cypht-windows.ps1 -BaseDir D:\web    # Use specific directory"
        exit 0
    }

    # Color output functions
    function Write-Success {
        param([string]$Message)
        Write-Host "[OK] $Message" -ForegroundColor Green
    }

    function Write-Error {
        param([string]$Message)
        Write-Host "[ERROR] $Message" -ForegroundColor Red
    }

    function Write-Info {
        param([string]$Message)
        Write-Host "[INFO] $Message" -ForegroundColor Blue
    }

    function Write-Warning {
        param([string]$Message)
        Write-Host "[WARNING] $Message" -ForegroundColor Yellow
    }

    # Function to check prerequisites
    function Test-Prerequisites {
        Write-Host "Checking prerequisites..." -ForegroundColor Cyan
        Write-Host ""

        # Check if PHP is installed
        try {
            $phpOutput = & php -v 2>&1
            if ($LASTEXITCODE -ne 0) {
                throw "PHP command failed"
            }
            Write-Success "PHP is installed"
            Write-Host "  Version: $($phpOutput[0])" -ForegroundColor Gray
        }
        catch {
            Write-Error "PHP is not installed or not in the system PATH"
            Write-Error "Please install PHP before proceeding"
            Write-Info "Download from: https://windows.php.net/download/"
            return $false
        }

        # Check required PHP extensions
        $requiredExtensions = @("openssl", "mbstring", "curl", "session", "dom", "fileinfo", "filter", "gd", "mysqli", "phar", "simplexml", "soap", "tokenizer", "xml", "xmlwriter", "zlib")
        $missingExtensions = @()

        try {
            $phpModules = & php -m 2>&1 | Out-String
            foreach ($ext in $requiredExtensions) {
                if ($phpModules -notmatch [regex]::Escape($ext)) {
                    $missingExtensions += $ext
                }
            }
        }
        catch {
            Write-Error "Could not check PHP extensions"
            return $false
        }

        if ($missingExtensions.Count -gt 0) {
            Write-Error "Missing required PHP extensions: $($missingExtensions -join ', ')"
            Write-Error "Please install the missing extensions before proceeding"
            return $false
        }
        else {
            Write-Success "All required PHP extensions are installed"
        }

        # Check if Composer is installed
        try {
            $composerOutput = & composer --version 2>&1
            if ($LASTEXITCODE -ne 0) {
                throw "Composer command failed"
            }
            Write-Success "Composer is installed"
            Write-Host "  Version: $($composerOutput)" -ForegroundColor Gray
        }
        catch {
            Write-Error "Composer is not installed or not in the system PATH"
            Write-Error "Please install Composer before proceeding"
            Write-Info "Download from: https://getcomposer.org/download/"
            return $false
        }

        Write-Host ""
        return $true
    }

    # Function to fetch available Cypht versions from GitHub
    function Get-CyphtVersions {
        Write-Info "Fetching latest versions from GitHub..."
        
        try {
            $response = Invoke-RestMethod -Uri "https://api.github.com/repos/cypht-org/cypht/releases" -Method Get -TimeoutSec 30
            $versions = $response | ForEach-Object { $_.tag_name } | Where-Object {
                # Only include version 2.x.y and above
                if ($_ -match '^v(\d+)\.') {
                    [int]$matches[1] -ge 2
                }
            } | Sort-Object { 
                # Sort by version number
                $v = $_ -replace '^v', ''
                try { [version]$v } catch { $v }
            } -Descending | Select-Object -First 20
            
            return $versions
        }
        catch {
            Write-Error "Failed to fetch versions from GitHub: $($_.Exception.Message)"
            return @()
        }
    }

    # Function to compare versions
    function Test-VersionGreater {
        param(
            [string]$Version1,
            [string]$Version2
        )
        
        # Remove 'v' prefix for comparison
        $v1 = $Version1 -replace '^v', ''
        $v2 = $Version2 -replace '^v', ''
        
        try {
            return [version]$v1 -gt [version]$v2
        }
        catch {
            # Fallback to string comparison if version parsing fails
            return $v1 -gt $v2
        }
    }

    # Function to detect existing installations
    function Get-ExistingInstallations {
        param([string]$BaseDirectory)
        
        $existingInstalls = @()
        
        if (Test-Path $BaseDirectory) {
            $cyphtDirs = Get-ChildItem -Path $BaseDirectory -Directory -Name "cypht-*" -ErrorAction SilentlyContinue
            
            # Ensure we have an array even with single element
            if ($cyphtDirs) {
                $cyphtDirs = @($cyphtDirs)  # Force array conversion
                
                foreach ($dir in $cyphtDirs) {
                    $version = $dir -replace '^cypht-', ''
                    
                    # Ensure version is properly extracted
                    if ($version -and $version -ne $dir) {
                        $existingInstalls += $version
                    }
                }
            }
        }
        
        # Ensure we return an array
        return @($existingInstalls)
    }

    # Function to install/upgrade Cypht
    function Install-Cypht {
        param(
            [string]$Version,
            [string]$PreviousVersion = "",
            [string]$BaseDirectory
        )
        
        $destination = Join-Path $BaseDirectory "cypht-$Version"
        $previousDestination = if ($PreviousVersion) { Join-Path $BaseDirectory "cypht-$PreviousVersion" } else { "" }
        
        # Create a temporary directory
        $tempDir = Join-Path $env:TEMP "cypht-install-$(Get-Random)"
        New-Item -ItemType Directory -Path $tempDir -Force | Out-Null

        try {
            # Handle upgrade scenario - but don't remove old version yet
            $isUpgrade = $false
            if ($PreviousVersion -and (Test-Path $previousDestination)) {
                Write-Warning "Upgrading from $PreviousVersion to $Version..."
                $isUpgrade = $true
                
                # Just note the old version exists - we'll handle it after successful installation
                Write-Info "Old version will be removed after successful installation"
            }

            # Create destination directory
            Write-Info "Installing Cypht version $Version..."
            New-Item -ItemType Directory -Path $destination -Force | Out-Null

            # Download the selected version
            Write-Info "Downloading version $Version..."
            $downloadUrl = "https://github.com/cypht-org/cypht/archive/refs/tags/$Version.zip"
            $zipFile = Join-Path $tempDir "$Version.zip"
            
            Invoke-WebRequest -Uri $downloadUrl -OutFile $zipFile -TimeoutSec 300
            
            if (-not (Test-Path $zipFile)) {
                throw "Failed to download version $Version"
            }

            # Extract the archive
            Write-Info "Extracting the archive..."
            Expand-Archive -Path $zipFile -DestinationPath $tempDir -Force
            
            # Find the extracted folder
            $extractedFolder = Join-Path $tempDir "cypht-$($Version.TrimStart('v'))"
            if (-not (Test-Path $extractedFolder)) {
                throw "Extracted folder not found: $extractedFolder"
            }

            # Run composer install
            Write-Info "Installing dependencies with Composer..."
            Push-Location $extractedFolder
            try {
                & composer install --no-dev --optimize-autoloader --no-interaction
                if ($LASTEXITCODE -ne 0) {
                    throw "Composer install failed"
                }
            }
            finally {
                Pop-Location
            }

            # Handle .env file
            $envExample = Join-Path $extractedFolder ".env.example"
            $envFile = Join-Path $extractedFolder ".env"
            
            if ($isUpgrade -and (Test-Path (Join-Path $previousDestination ".env"))) {
                Write-Info "Copying .env file from previous version..."
                Copy-Item (Join-Path $previousDestination ".env") $envFile -Force
                Write-Success "Copied .env file from $PreviousVersion"
            }
            elseif (Test-Path $envExample) {
                Write-Info "Creating .env from .env.example..."
                Copy-Item $envExample $envFile -Force
            }

            # Set file permissions (Windows equivalent)
            Write-Info "Setting file permissions..."
            $currentUser = [System.Security.Principal.WindowsIdentity]::GetCurrent().Name
            
            # Use icacls to set permissions
            & icacls $extractedFolder /setowner $currentUser /T /Q 2>$null
            & icacls $extractedFolder /grant "${currentUser}:(OI)(CI)F" /T /Q 2>$null

            # Copy files to destination
            Write-Info "Copying files to $destination..."
            Get-ChildItem -Path $extractedFolder -Force | ForEach-Object {
                $destPath = Join-Path $destination $_.Name
                if ($_.PSIsContainer) {
                    Copy-Item $_.FullName $destPath -Recurse -Force
                }
                else {
                    Copy-Item $_.FullName $destPath -Force
                }
            }

            Write-Success "Cypht $Version installed successfully to $destination"
            
            # Remove old version after successful installation (upgrade only)
            if ($isUpgrade -and (Test-Path $previousDestination)) {
                Write-Info "Removing old version $PreviousVersion..."
                try {
                    Remove-Item $previousDestination -Recurse -Force -ErrorAction Stop
                    Write-Success "Successfully removed old version $PreviousVersion"
                }
                catch {
                    Write-Warning "Could not remove old version directory: $($_.Exception.Message)"
                    Write-Warning "You may need to manually delete: $previousDestination"
                }
            }
            
            # Display completion message
            Write-Host ""
            Write-Success "Installation completed successfully!"
            if ($isUpgrade) {
                Write-Success "Upgrade from $PreviousVersion to $Version completed"
                Write-Info "Old version has been removed - only the latest version remains"
            }
            else {
                Write-Success "Cypht $Version has been installed successfully"
            }
            Write-Warning "Please check the Cypht documentation for configuration:"
            Write-Info "https://www.cypht.org/install/"
            
            return $true
        }
        catch {
            Write-Error "Installation failed: $($_.Exception.Message)"
            return $false
        }
        finally {
            # Clean up temporary directory
            if (Test-Path $tempDir) {
                Remove-Item $tempDir -Recurse -Force -ErrorAction SilentlyContinue
            }
        }
    }

    # Main script execution - only run if script is executed directly, not sourced
    if ($MyInvocation.InvocationName -ne '.') {
    Write-Host "Cypht Installer/Upgrader for Windows" -ForegroundColor Cyan
    Write-Host "=====================================" -ForegroundColor Cyan
    Write-Host ""

    # Check prerequisites
    if (-not (Test-Prerequisites)) {
        Write-Error "Prerequisites check failed. Please resolve the issues above and try again."
        exit 1
    }

    # Prompt for base directory if not provided via parameter
    if ([string]::IsNullOrWhiteSpace($BaseDir)) {
        $defaultBaseDir = "C:\Cypht"
        $BaseDir = Read-Host "Enter the base directory for Cypht installation [$defaultBaseDir]"
        if ([string]::IsNullOrWhiteSpace($BaseDir)) {
            $BaseDir = $defaultBaseDir
            Write-Info "Using default directory: $BaseDir"
        }
    }

    # Ensure base directory exists
    if (-not (Test-Path $BaseDir)) {
        Write-Info "Creating base directory: $BaseDir"
        New-Item -ItemType Directory -Path $BaseDir -Force | Out-Null
    }

    # Detect existing installations
    $existingVersions = @(Get-ExistingInstallations -BaseDirectory $BaseDir)

    if ($existingVersions.Count -gt 0) {
        Write-Warning "Found existing Cypht installations:"
        # Use a more reliable output method
        $installationList = @()
        for ($i = 0; $i -lt $existingVersions.Count; $i++) {
            $number = $i + 1
            $version = $existingVersions[$i]
            $line = "  $number. cypht-$version"
            $installationList += $line
        }
        # Output all at once to avoid buffering issues
        $installationList | ForEach-Object { Write-Host $_ }
        Write-Host ""
        
        $upgradeChoice = Read-Host "Do you want to upgrade an existing installation? (yes/no) [yes]"
        if ([string]::IsNullOrWhiteSpace($upgradeChoice) -or $upgradeChoice -eq "yes") {
            if ($existingVersions.Count -eq 1) {
                $selectedPreviousVersion = $existingVersions[0]
                Write-Info "Upgrading the only existing installation: $selectedPreviousVersion"
            }
            else {
                do {
                    $upgradeNumber = Read-Host "Enter the number of the installation to upgrade (1-$($existingVersions.Count))"
                    $upgradeIndex = [int]$upgradeNumber - 1
                } while ($upgradeIndex -lt 0 -or $upgradeIndex -ge $existingVersions.Count)
                
                $selectedPreviousVersion = $existingVersions[$upgradeIndex]
                Write-Info "Selected version for upgrade: $selectedPreviousVersion"
            }
            
            # Fetch available versions
            Write-Info "Checking for available upgrades..."
            $availableVersions = Get-CyphtVersions
            
            if ($availableVersions.Count -eq 0) {
                Write-Error "Could not fetch available versions from GitHub"
                exit 1
            }
            
            # Filter versions newer than the current one
            $upgradeCandidates = @()
            foreach ($version in $availableVersions) {
                if (Test-VersionGreater -Version1 $version -Version2 $selectedPreviousVersion) {
                    $upgradeCandidates += $version
                }
            }
            
            if ($upgradeCandidates.Count -eq 0) {
                Write-Success "No newer versions available. Your installation is up to date."
                exit 0
            }
            
            Write-Host ""
            Write-Warning "Available upgrades for $selectedPreviousVersion"
            for ($i = 0; $i -lt $upgradeCandidates.Count; $i++) {
                Write-Host "  $($i + 1). $($upgradeCandidates[$i])"
            }
            
            do {
                $versionChoice = Read-Host "Enter the version number to upgrade to (1-$($upgradeCandidates.Count))"
                $versionIndex = [int]$versionChoice - 1
            } while ($versionIndex -lt 0 -or $versionIndex -ge $upgradeCandidates.Count)
            
            $newVersion = $upgradeCandidates[$versionIndex]
            
            # Perform upgrade
            if (Install-Cypht -Version $newVersion -PreviousVersion $selectedPreviousVersion -BaseDirectory $BaseDir) {
                exit 0
            }
            else {
                exit 1
            }
        }
    }

    # New installation
    Write-Info "Proceeding with new installation..."

    # Fetch available versions
    $availableVersions = Get-CyphtVersions

    if ($availableVersions.Count -eq 0) {
        Write-Error "No versions found available for installation"
        exit 1
    }

    # Display available versions
    Write-Host ""
    Write-Warning "Available Cypht versions (v2.x.y and above):"
    for ($i = 0; $i -lt $availableVersions.Count; $i++) {
        Write-Host "  $($i + 1). $($availableVersions[$i])"
    }

    # Prompt user to select a version
    do {
        $versionChoice = Read-Host "Enter the version number to install (1-$($availableVersions.Count))"
        $versionIndex = [int]$versionChoice - 1
    } while ($versionIndex -lt 0 -or $versionIndex -ge $availableVersions.Count)

    $selectedVersion = $availableVersions[$versionIndex]

    Write-Info "Installing version: $selectedVersion"
    if (Install-Cypht -Version $selectedVersion -BaseDirectory $BaseDir) {
        exit 0
    }
    else {
        exit 1
    }

    } # End of main execution block

                            </pre>
                        </div>
                    </div>
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
            <a class="nav-link active" id="linux-tab" data-toggle="tab" href="#linux" role="tab" aria-controls="linux" aria-selected="true">Linux</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="windows-tab" data-toggle="tab" href="#windows" role="tab" aria-controls="windows" aria-selected="false">Windows</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="cpanel-tab" data-toggle="tab" href="#cpanel" role="tab" aria-controls="cpanel" aria-selected="false">Cpanel</a>
        </li>

    </ul>
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="linux" role="tabpanel" aria-labelledby="linux-tab">
            <pre>

                #!/bin/bash

                bold_green() {
                echo -e "\033[1m\033[32m✓ $1\033[0m"
                }

                bold_red() {
                echo -e "\033[1m\033[31m$1\033[0m"
                }

                bold_blue() {
                echo -e "\033[1m\033[34m$1\033[0m"
                }

                bold_yellow() {
                echo -e "\033[1m\033[33m$1\033[0m"
                }

                # Function to check prerequisites
                check_prerequisites() {
                    echo "Checking prerequisites..."

                    # Check if jq is installed (needed for version parsing)
                    if ! command -v jq &>/dev/null; then
                        bold_red "Error: jq is not installed but required to fetch versions."
                        bold_red "Please install it with:"
                        bold_blue "  sudo apt update && sudo apt install jq"
                        exit 1
                    fi

                    # Check if PHP is installed
                    if ! command -v php &>/dev/null; then
                        bold_red "Error: PHP is not installed or not in the system PATH."
                        bold_red "Please install PHP before proceeding."
                        exit 1
                    fi

                    # Print the PHP version
                    bold_green "PHP is installed."

                    # List installed PHP extensions
                    required_extensions=("openssl" "mbstring" "curl" "session" "dom" "fileinfo" "filter" "gd" "mysqli" "phar" "simplexml" "soap" "tokenizer" "xml" "xmlwriter" "zlib")
                    missing_extensions=()

                    for ext in "${required_extensions[@]}"; do
                        if ! php -m | grep -iq "$ext"; then
                            missing_extensions+=("$ext")
                        fi
                    done

                    if [ ${#missing_extensions[@]} -gt 0 ]; then
                        bold_red "Error: The following required PHP extensions are missing: ${missing_extensions[*]}"
                        bold_red "Please install the missing extensions before proceeding."
                        exit 1
                    else
                        bold_green "All required PHP extensions (OpenSSL, mbstring, cURL, session, dom, fileinfo, filter, gd, mysqli, phar, simplexml, soap, tokenizer, xml, xmlwriter, zlib) are installed."
                    fi

                    # Check if Composer is installed
                    if ! command -v composer &>/dev/null; then
                        bold_red "Error: Composer is not installed or not in the system PATH."
                        bold_red "Please install Composer before proceeding: https://getcomposer.org/download/"
                        exit 1
                    fi

                    # Print the Composer version
                    bold_green "Composer is installed.\n"

                }

                # Function to fetch the list of valid tags from the GitHub repository
                fetch_tags() {
                    echo "Fetching latest versions from GitHub..." >&2  # Print to stderr to avoid mixing with output
                    curl -s https://api.github.com/repos/cypht-org/cypht/releases | \
                    jq -r '.[] | select(.created_at > "2018-11-13T03:58:48Z") | .tag_name' | sort -V | \
                    awk -F. '
                    {
                        major = substr($1, 2)  # Extract major version number (e.g., "1" from "v1.x.y")
                        latest[major] = $0     # Always update the latest version for this major version
                    }
                    END {
                        # Print the latest version for each major version
                        for (major in latest) {
                            print latest[major]
                        }
                    }' | sort -V  # Sort the final output by version
                }

                # Function to install Cypht for a given version
                install_cypht() {
                    local version=$1
                    local destination="$BASE_DIR/cypht-$version"

                    # Check if the destination directory already exists
                    if [ -d "$destination" ]; then
                        bold_yellow "Cypht version $version already exists at $destination."
                        read -p "Do you want to overwrite it? (yes/no) [yes]: " overwrite
                        overwrite="${overwrite:-yes}"  # Default to 'yes' if no input is provided
                        if [[ "$overwrite" != "yes" ]]; then
                            bold_red "Installation aborted."
                            exit 0
                        else
                            bold_blue "Overwriting existing installation..."
                            sudo rm -rf "$destination"
                        fi
                    fi

                    # Create destination directory
                    bold_blue "Creating directory for version $version: $destination\n\n"
                    sudo mkdir -p "$destination"

                    # Create temporary working directory
                    temp_dir=$(mktemp -d)
                    cd "$temp_dir" || exit 1

                    # Download the selected version of Cypht
                    if [ "$version" == "master" ]; then
                        bold_blue "Downloading the latest development version (master branch)..."
                        wget "https://github.com/cypht-org/cypht/archive/refs/heads/master.zip" -O "master.zip"
                        archive_name="master.zip"
                        extracted_folder="cypht-master"
                    else
                        bold_blue "Downloading version $version..."
                        wget "https://github.com/cypht-org/cypht/archive/refs/tags/$version.zip" -O "$version.zip"
                        archive_name="$version.zip"
                        extracted_folder="cypht-${version#v}"
                    fi

                    if [ $? -ne 0 ]; then
                        bold_red "Error downloading version $version."
                        exit 1
                    fi

                    # Unpack the archive
                    bold_blue "Unpacking the archive...\n"
                    unzip "$archive_name"

                    if [ $? -ne 0 ]; then
                        bold_red "Error unpacking the archive."
                        exit 1
                    fi

                    # Run composer
                    cd "$extracted_folder" || exit 1
                    bold_blue "Installing dependencies with composer...\n"
                    composer install

                    # Handle configuration file creation

                    if [[ "$selected_version" =~ ^v1 ]]; then
                        bold_blue "Creating hm3.ini from hm3.sample.ini\n"
                        cp hm3.sample.ini hm3.ini
                    else
                        bold_blue "Creating .env from .env.example....\n"
                        cp .env.example .env
                    fi

                    # Fix permissions and ownership
                    bold_blue "Fixing permissions...\n"
                    find . -type d -exec chmod 755 {} \;
                    find . -type f -exec chmod 644 {} \;

                    # Ask for group (root is default for other systems, or user for macOS)
                    read -p "Enter the group to own the files [root]: " group
                    group="${group:-root}"

                    sudo chown -R root:"$group" .

                    # Move files to the destination folder
                    bold_blue "Copying files to $destination...\n"
                    sudo mv ./* ./.[!.]* "$destination"

                    # Clean up temporary directory
                    cd ..
                    sudo rm -rf "$temp_dir"

                    if [ $? -ne 0 ]; then
                        echo "Error moving files to $destination."
                        exit 1
                    fi
                    bold_green "Cypht $version installed successfully to $destination"
                }

                # Main script execution

                # Check prerequisites
                check_prerequisites

                # Fetch available version tags
                available_versions=$(fetch_tags)
                available_versions=$(echo -e "$available_versions\nmaster")  # Add master branch to the list

                # Display available versions
                echo "$available_versions" | nl -s '. '

                # Prompt user to select a version
                read -p "Enter the version number (e.g. 1 for $(echo "$available_versions" | head -n 1)) [master]: " version_choice
                version_choice="${version_choice:-$(echo "$available_versions" | grep -n "master" | cut -d: -f1)}"

                # Get the version based on the user’s choice
                selected_version=$(echo "$available_versions" | sed -n "${version_choice}p")

                if [ -z "$selected_version" ]; then
                    bold_red "Error: Invalid version choice. Please select a valid number from the list."
                    exit 1
                fi

                # Prompt user for BASE_DIR
                read -p "Enter the base directory for Cypht installation [/usr/local/share/cypht]: " BASE_DIR
                BASE_DIR="${BASE_DIR:-/usr/local/share/cypht}"

                bold_blue "Installation of version: $selected_version"
                install_cypht "$selected_version"

            </pre>
        </div>
        <div class="tab-pane fade" id="windows" role="tabpanel" aria-labelledby="windows-tab">
            <pre>
                @echo off
                setlocal enabledelayedexpansion

                :: Enabling ANSI Support and UTF-8 Encoding
                chcp 65001 >nul
                reg add HKCU\Console /v VirtualTerminalLevel /t REG_DWORD /d 1 /f >nul 2>&1

                :: Définition des codes couleur et symboles
                for /F "tokens=2 delims=#" %%a in ('"prompt #$H#$E# & echo on & for %%b in (1) do rem"') do (
                    set "ESC=%%a"
                )
                set "GREEN=%ESC%[32m"
                set "RED=%ESC%[31m"
                set "RESET=%ESC%[0m"

                :: Minimalist version and functional guarantee
                echo
                echo Checking prerequisites...
                echo.
                ::1. PHP Verification...
                where php >nul 2>&1
                if %errorlevel% neq 0 (
                echo %RED%Error: PHP is not installed or not in the system PATH.%RESET%
                echo %RED%Please install PHP before proceeding.%RESET%
                pause
                exit /b 1
                )
                echo %GREEN%   [✓] PHP is installed.%RESET%

                set "required_extensions=openssl mbstring curl "
                set "missing_extensions="

                for %%e in (%required_extensions%) do (
                    php -m | find /i "%%e" >nul 2>&1
                    if errorlevel 1 (
                        set "missing_extensions=!missing_extensions! %%e"
                        echo %RED%   [X] Extension PHP %%e missing%RESET%
                    )
                )

                if defined missing_extensions (
                    echo.
                    echo  %RED%   [X] Missing extension :%missing_extensions% %RESET%
                    echo %RED%Install these extensions before proceeding%RESET%
                    pause
                    exit /b 1
                ) else (
                    echo.
                    echo %GREEN%   [✓] All required PHP extensions [OpenSSL, mbstring, cURL] are installed.%RESET%
                )
                echo.

                :: 2. Composer Verification
                where composer >nul 2>&1
                if %errorlevel% neq 0 (
                echo %RED%   Error: Composer is not installed or not in the system PATH.%RESET%
                echo %RED%   Please install Composer before proceeding: https://getcomposer.org/download/%RESET%
                pause
                exit /b 1
                )
                echo %GREEN%   [✓] Composer is installed.%RESET%
                echo.
                :: fetch list of valid tags from the GitHub repository

                :: Create a temporary file
                set "temp_file=%temp%\cypht_versions.txt"

                :: fetch list
                powershell -command "$releases = Invoke-RestMethod -Uri 'https://api.github.com/repos/cypht-org/cypht/releases' -UseBasicParsing; $versions = $releases | Where-Object { $_.created_at -gt [datetime]'2018-11-13T03:58:48Z' } | Select-Object -ExpandProperty tag_name; $latest = $versions | Where-Object { $_ -match '^v\d+\.\d+\.\d+$' } | Group-Object { ($_ -split '\.')[0] } | ForEach-Object { $_.Group | Sort-Object -Descending | Select-Object -First 1 }; if ($versions -contains 'master') { $latest += 'master' }; $latest | Sort-Object" > "%temp_file%"

                :: Check if we have recovered any versions
                set "count=0"
                for /f "delims=" %%v in (%temp_file%) do (
                    set /a "count+=1"
                    set "version[!count!]=%%v"
                )

                :: Displaying Numbered Versions
                if !count! equ 0 (
                    echo %RED%No version found!%RESET%
                    goto cleanup
                )

                echo Fetching latest versions from GitHub...
                for /l %%i in (1,1,!count!) do (
                    echo    %%i. !version[%%i]!
                )

                :: Also offer the master version
                set /a "count+=1"
                set "version[!count!]=master"
                echo    !count!. master
                echo.

                :cleanup
                del "%temp_file%" 2>nul


                :: 3. Request version
                echo.
                :input_version_number
                set /p "VERSION=Enter the version number (e.g. 1 for v1.4.5) [master]:"
                if "!VERSION!"=="" set "VERSION=!count!"
                if not defined version[%VERSION%] (
                    echo %RED%   Error: Invalid version choice. Please select a valid number from the list..%RESET%
                    goto input_version_number
                )
                :: 4. Request directory
                set /p "INSTALL_DIR=Enter the base directory for Cypht installation [C:\cypht]:"
                if "!INSTALL_DIR!"=="" set "INSTALL_DIR=C:\cypht"
                :: 5. Confirmation
                echo.

                echo Installation in progress...
                set "version=!version[%VERSION%]!"
                set "destination=%INSTALL_DIR%\cypht-%version%"
                echo.

                :: Check if the folder already exists
                if exist "%destination%" (
                    echo %RED%[X] Version %version% already exists in %destination%.%RESET%
                    set /p "overwrite=Do you want to crush it? (yes/no) [yes]:"
                    if "!overwrite!"=="" set "overwrite=yes"
                    if /i "!overwrite!"=="no" (
                        echo Installation canceled.
                        exit /b 0
                    )
                    echo Overwriting of the existing installation...
                    rmdir /s /q "%destination%"
                )

                :: Create destination folder
                echo Creating the folder for the release %version%: %destination%
                mkdir "%destination%" 2>nul
                if not exist "%destination%" (
                    echo %RED%Failed to create the folder.%RESET%
                    exit /b 1
                )

                :: Create a temporary folder
                set "temp_dir=%temp%\cypht_install"
                mkdir "%temp_dir%" 2>nul

                :: Download Cypht
                if "%version%"=="master" (
                    echo Download the development version [master]...
                    powershell -command "Invoke-WebRequest -Uri 'https://github.com/cypht-org/cypht/archive/refs/heads/master.zip' -OutFile '%temp_dir%\master.zip'"
                    set "archive_name=master.zip"
                    set "extracted_folder=cypht-master"
                ) else (
                    echo Download the development version %version%...
                    powershell -command "Invoke-WebRequest -Uri 'https://github.com/cypht-org/cypht/archive/refs/tags/%version%.zip' -OutFile '%temp_dir%\%version%.zip'"
                    set "archive_name=%version%.zip"
                    set "extracted_folder=cypht-!version:v=!"
                )

                if not exist "%temp_dir%\%archive_name%" (
                    echo %RED%Error downloading.%RESET%
                    exit /b 1
                )


                echo Extracting the archive...
                powershell -command "Expand-Archive -Path '%temp_dir%\%archive_name%' -DestinationPath '%destination%'; $extracted = Get-ChildItem '%destination%' -Directory | Where-Object {$_.Name -like 'cypht-*'} | Select-Object -First 1; if ($extracted) { Get-ChildItem $extracted.FullName | Move-Item -Destination '%destination%' -Force; Remove-Item $extracted.FullName -Recurse -Force }"
                if not exist "%destination%" (
                    echo %RED%Error during extraction.%RESET%
                    exit /b 1
                )

                ::Cleaning
                rd /s /q "%temp_dir%"

                cd /d "%destination%"

                :: Create the configuration file
                if "!version:~0,2!"=="v1" (
                    echo Creating hm3.ini from hm3.sample.ini
                    copy "%destination%\hm3.sample.ini" "%destination%\hm3.ini"
                ) else (
                    echo Creating .env from .env.example
                    copy "%destination%\.env.example" "%destination%\.env"
                )


                echo.
                echo Installing dependencies with Composer...
                powershell -command "composer install"

                echo.
                echo Copying files to %destination%
                echo.
                echo  %GREEN% ✓ Cypht %version%  installed successfully to %destination% %RESET%
                pause
            </pre>
        </div>
        <div class="tab-pane fade" id="cpanel" role="tabpanel" aria-labelledby="cpanel-tab">
            <pre>
                #!/bin/bash

                bold_green() {
                echo -e "\033[1m\033[32m✓ $1\033[0m"
                }

                bold_red() {
                echo -e "\033[1m\033[31m$1\033[0m"
                }

                bold_blue() {
                echo -e "\033[1m\033[34m$1\033[0m"
                }

                bold_yellow() {
                echo -e "\033[1m\033[33m$1\033[0m"
                }

                # Function to check prerequisites
                check_prerequisites() {
                    echo "Checking prerequisites..."

                    # Check if PHP is installed
                    if ! command -v php &>/dev/null; then
                        bold_red "Error: PHP is not installed or not in the system PATH."
                        bold_red "Please install PHP before proceeding."
                        exit 1
                    fi

                    # Print the PHP version
                    bold_green "PHP is installed."

                    # List installed PHP extensions
                    required_extensions=("openssl" "mbstring" "curl")
                    missing_extensions=()

                    for ext in "${required_extensions[@]}"; do
                        if ! php -m | grep -iq "$ext"; then
                            missing_extensions+=("$ext")
                        fi
                    done

                    if [ ${#missing_extensions[@]} -gt 0 ]; then
                        bold_red "Error: The following required PHP extensions are missing: ${missing_extensions[*]}"
                        bold_red "Please install the missing extensions before proceeding."
                        exit 1
                    else
                        bold_green "All required PHP extensions (OpenSSL, mbstring, cURL) are installed."
                    fi

                    # Check if Composer is installed
                    if ! command -v composer &>/dev/null; then
                        bold_red "Error: Composer is not installed or not in the system PATH."
                        bold_red "Please install Composer before proceeding: https://getcomposer.org/download/"
                        exit 1
                    fi

                    # Print the Composer version
                    bold_green "Composer is installed.\n"

                    # Check if jq is installed (needed for version parsing)
                    # if ! command -v jq &>/dev/null; then
                    #     bold_red "Error: jq is not installed but required to fetch versions."
                    #     bold_red "Please install it with:"
                    #     bold_blue "  apt update && apt install jq"
                    #     exit 1
                    # fi

                }

                # Function to fetch the list of valid tags from the GitHub repository
                selected_version=""
                fetch_tags() {
                    echo "Fetching latest versions from GitHub..." >&2  # Print to stderr to avoid mixing with output
                    versions=$(curl -s https://api.github.com/repos/cypht-org/cypht/releases | grep '"tag_name":' | awk -F'"' '{print $4}' | sort -Vr)
                    local master_version="master"

                    declare -A latest_versions

                    for version in $versions; do
                        if [[ "$version" =~ ^v([0-9]+)\.[0-9]+\.[0-9]+$ ]]; then
                            local major_version=${BASH_REMATCH[1]}
                            if [[ -z "${latest_versions[$major_version]}" ]]; then
                                latest_versions[$major_version]=$version
                            fi
                        fi
                    done

                    local sorted_majors=($(printf "%s\n" "${!latest_versions[@]}" | sort -nr))

                    local count=1
                    for major in "${sorted_majors[@]}"; do
                        echo "$count. ${latest_versions[$major]}"
                        ((count++))
                    done
                    echo "---------------------"

                    local max_option=$count
                    echo "$max_option. $master_version"
                    echo ""

                    while true; do
                        read -p "Enter the version number (e.g. 1 for v1.4.5) [master]: " choice

                        if [[ -z "$choice" ]]; then
                            selected_version="$master_version"
                            break
                        fi

                        if ! [[ "$choice" =~ ^[0-9]+$ ]]; then
                            bold_red "Invalid version choice. Please select a valid number from the list.."
                            continue
                        fi

                        if (( choice < 1 || choice > max_option )); then
                            bold_red "Invalid version choice. Please select a valid number from the list.."
                            continue
                        fi

                        if (( choice == max_option )); then
                            selected_version="$master_version"
                        else
                            local selected_index=$((choice-1))
                            selected_version="${latest_versions[${sorted_majors[$selected_index]}]}"
                        fi
                        break
                    done
                }

                # Function to install Cypht for a given version
                install_cypht() {
                    local version=$1
                    local destination="$BASE_DIR"

                    # Create temporary working directory
                    temp_dir=$(mktemp -d)
                    cd "$temp_dir" || exit 1

                    # Download the selected version of Cypht
                    if [ "$version" == "master" ]; then
                        bold_blue "Downloading the latest development version (master branch)..."
                        wget "https://github.com/cypht-org/cypht/archive/refs/heads/master.zip" -O "master.zip"
                        archive_name="master.zip"
                        extracted_folder="cypht-master"
                    else
                        bold_blue "Downloading version $version..."
                        wget "https://github.com/cypht-org/cypht/archive/refs/tags/$version.zip" -O "$version.zip"
                        archive_name="$version.zip"
                        extracted_folder="cypht-${version#v}"
                    fi

                    if [ $? -ne 0 ]; then
                        bold_red "Error downloading version $version."
                        exit 1
                    fi

                    # Unpack the archive
                    bold_blue "Unpacking the archive...\n"
                    unzip "$archive_name"

                    if [ $? -ne 0 ]; then
                        bold_red "Error unpacking the archive."
                        exit 1
                    fi

                    # Run composer
                    cd "$extracted_folder" || exit 1
                    bold_blue "Installing dependencies with composer...\n"
                    composer install

                    # Handle configuration file creation

                    if [[ "$selected_version" =~ ^v1 ]]; then
                        bold_blue "Creating hm3.ini from hm3.sample.ini\n"
                        cp hm3.sample.ini hm3.ini
                    else
                        bold_blue "Creating .env from .env.example....\n"
                        cp .env.example .env
                    fi

                    # Move files to the destination folder
                    bold_blue "Copying files to $destination...\n"
                    rm -rf "$destination"
                    mkdir -p "$destination"
                    mv ./* ./.[!.]* "$destination/"

                    # Clean up temporary directory
                    cd ..
                    rm -rf "$temp_dir"

                    if [ $? -ne 0 ]; then
                        echo "Error moving files to $destination."
                        exit 1
                    fi
                    bold_green "Cypht $version installed successfully to $destination"
                }

                # Function: check_public_html_data
                # Description:  Checks if the user's public_html folder contains data.
                #               If data is found, it warns the user and asks
                #               for confirmation to continue, with 'no' as the default option.
                # Returns:      0 if the user chooses to continue or if the folder is empty/does not exist.
                #               1 if the user chooses to exit.
                check_public_html_data() {
                    local public_html_dir="$BASE_DIR"

                    if [ -n "$(ls -A "$public_html_dir")" ]; then
                        # Le dossier contient des données
                        echo ""
                        bold_yellow "WARNING: The folder public_html/ contains data."
                        bold_yellow "If you continue, this data could be lost or overwritten."
                        echo ""

                        read -p "Do you really want to continue? (yes/no) [no]: " -r user_response

                        user_response=${user_response,,} #
                        user_response=${user_response:-no} #

                        case "$user_response" in
                            yes|y)
                                return 0
                                ;;
                            *)
                                return 1
                                ;;
                        esac
                    else
                        return 0
                    fi
                }

                # Main script execution

                # Check prerequisites
                check_prerequisites
                BASE_DIR="$HOME/public_html"

                # Fetch available version tags
                fetch_tags

                if check_public_html_data; then

                    mkdir -p ~/hm3/{attachments,users,app_data}

                    bold_blue "Installation of version: $selected_version"
                    install_cypht "$selected_version"

                else

                    echo ""
                    bold_yellow "You have canceled the installation process."
                    echo ""
                    exit 1
                fi


            </pre>
        </div>
    </div>

    <h4>3. Configure the program</h4>
    <p>
        To configure Cypht for your environment, you must first edit the "hm3.ini" (for Cypht 1.4.x) or ".env"
        (for Cypht 2.x.x) file to your liking, .env content can be generated using the <a href='/config-generator'>Cypht Config Generator</a>, then run the "config_gen.php" script to generate the optimized
        configuration file and assets used at run-time.
    </p>

    <p>
        For Cypht 1.4.x, begin by editing the "hm3.ini" file to configure Cypht for your environment.
        If you choose to use a database for any of the three available purposes (authentication, sessions, or user settings),
        you will need to complete the "DB support" section and create the required tables.
        SQL to do so can be found in the "hm3.sample.ini" file. The "hm3.ini" file contains many comments explaining each configuration option and how to set it up for your environment.
    </p>

    <pre>
        sudo mkdir -p /var/lib/hm3/{attachments,users,app_data}
        sudo chown -R www-data /var/lib/hm3/
    </pre>

    <p>
        The "/var/lib/hm3/users" directory is only required if you are using the file-system and not a database to store             user settings (user_config_type = file in the "hm3.ini" or ".env"). You can put these directories anywhere, just make sure the values in the ini file point to the right place.
    </p>
    <h4>4. Generate the run-time configuration</h4>
    <p>Cypht uses a build process to create an optimized configuration, and to combine and minimize page assets.Once you have edited your "hm3.ini" or ".env" file, generate the configuration with:</p>
    <pre>
        cd /usr/local/share/cypht  (or wherever you put the code in section 1)
        sudo php ./scripts/config_gen.php
    </pre>
    <p>Now going to https://your-server/mail/ should load the Cypht login page. Note that If you use a symlink, your web-server must be configured to follow symlinks.</p>

    <h4>5. Enable the program in your web-server</h4>
    <p>The easiest way to serve Cypht is to symlink it to the web-server document root. You can also copy the generated files to your web-server location, but then you will need to re-copy them anytime the config_gen script is run. If the source is located at /usr/local/share/cypht, and the web-server document root is at /var/www/html, the following command will make Cypht available under the "mail" path of the web-server:</p>

    <pre>
        sudo ln -s /usr/local/share/cypht/site /var/www/html/mail
    </pre>

    <h4>Nginx Configuration</h4>
    <p>For Nginx users, add these security rules to your server configuration:</p>

    <pre>
    location = / {
        rewrite ^/$ /index.php last;
    }

    # Block hidden files starting with .
    location ~ /\. {
        deny all;
    }

    # Block sensitive files
    location ~* \.(env|ini|log|conf|json|lock|yml|yaml|md|txt|sh|bat|ps1|xml|bak|sql|dist|inc|cfg|db|csv)$ {
        deny all;
    }

    # Allow exceptions for specific files
    location ~* ^/(server_accounts_sample\.yaml|server_accounts_sample\.csv|contact_sample\.csv)$ {
        allow all;
    }

    # Block RELEASE_NOTES, Makefile, Docker-related configs
    location ~* /(RELEASE_NOTES|Makefile|Dockerfile|docker-compose\.yml|docker-compose\.dev\.yaml|docker-compose\.prod\.yaml)$ {
        deny all;
    }

    # Block .git directory
    location ~ /\.git {
        deny all;
    }

    # Disable directory listing
    autoindex off;
    </pre>

    <p>Make sure to reload Nginx after making these changes:</p>
    <pre>
    sudo systemctl reload nginx
    </pre>

    <p>Now going to https://your-server/mail/ should load the Cypht login page. Note that If you use a symlink, your web-server must be configured to follow symlinks.</p>

    <h4>6. Users</h4>
    <p>Setting up users depends on what type of authentication you configure in the hm3.ini file. If you are using the local database configuration for users, there are scripts in the scripts/ directory to help manage them:</p>

    <pre>
        # create an account
        php ./scripts/create_account.php username password

        # delete an account
        php ./scripts/delete_account.php username

        # change an account password
        php ./scripts/update_password.php username password
    </pre>

    <h4>7. Debug mode</h4>
    <p>Cypht has a debug or developer mode that can be used to troubleshoot problems or enable faster development of modules. To enable the debug version of Cypht, just sym-link the entire source directory instead of the site sub-directory:</p>

    <pre>sudo ln -s /usr/local/share/cypht /var/www/html/mail-debug</pre>
    <p>
        Debug mode is not as efficient as the normal version, and it is NOT designed to be secure. DO NOT RUN DEBUG MODE IN PRODUCTION. You have been warned! Debug mode outputs lots of information to the PHP error log that can be useful for trouble-shooting problems. The location of the error log varies based on your php.ini settings and web-server software.
    </p>

    <h4>8. Other INI files</h4>
    <p>
        Some Cypht modules require additional ini files to be configured. These should NOT be inside the web-server document root. Cypht will look for them in the location defined by "app_data_dir" in the hm3.ini file. A sample ini file for each module set that requires one is included in the source for that module. To configure them you must copy the sample ini file to the "app_data_dir" and edit it for your setup. Some of these require configuring your service with a provider, specifically ones related to Oauth2 client setup (Github,  WordPress, Oauth2 over IMAP for Gmail and Outlook). Re-run the config_gen script after configuring an ini file and it will be merged into the main configuration settings.
        <ul>
            <li><b>Github</b>
                <p>Cypht can connect to github and aggregate notification data about repository activity.<br />Example github.ini file:<br />
                    <a
                        href="https://github.com/cypht-org/cypht/blob/1.4.x/modules/github/github.ini">https://github.com/cypht-org/cypht/blob/1.4.x/modules/github/github.ini</a><br /><br />
                    Authorize an application for github:<br />
                    <a
                        href="https://github.com/settings/developers">https://github.com/settings/developers</a>
                </p>
            </li>
            <li><b>OAUTH2 over IMAP</b>
                <p>Gmail and Outlook.com support OAUTH2 authentication over IMAP. This is preferable to normal IMAP
                    authentication because Cypht never has access to your account password.<br /><br />
                    Example oauth2 ini file:<br />
                    <a
                        href="https://github.com/cypht-org/cypht/blob/1.4.x/modules/imap/oauth2.ini">https://github.com/cypht-org/cypht/blob/1.4.x/modules/imap/oauth2.ini</a><br /><br />
                    Authorize an application for gmail<br />
                    <a
                        href="https://console.developers.google.com/project">https://console.developers.google.com/project</a><br /><br />
                    Authorize an application for outlook.com<br />
                    <a
                        href="https://account.live.com/developers/applications/">https://account.live.com/developers/applications/</a><br /><br />
                </p>
            </li>
            <li><b>WordPress</b>
                <p>Cypht can aggregate WordPress.com notifications.<br /><br />
                    Example wordpress.ini file:<br />
                    <a
                        href="https://github.com/cypht-org/cypht/blob/1.4.x/modules/wordpress/wordpress.ini">https://github.com/cypht-org/cypht/blob/1.4.x/modules/wordpress/wordpress.ini</a><br /><br />
                    Authorize an application for WordPress.com:<br />
                    <a href="https://developer.wordpress.com/apps/">https://developer.wordpress.com/apps/</a>
                </p>
            </li>
                        <li><b>Custom themes</b>
                <p>
                    You can create your own themes for Cypht. Edit the themes.ini file to include your theme, and put the css file in modules/themes/assets.<br />
                    <a
                        href="https://github.com/cypht-org/cypht/blob/1.4.x/modules/themes/themes.ini">https://github.com/cypht-org/cypht/blob/1.4.x/modules/themes/themes.ini</a>
                </p>
            </li>
        </ul>
    </p>

    <h2>2. Install cypht using Docker</h2>
    <p>
        Using Docker is one of the easiest way to install cypht as the cypht docker image comes with all the steps required in the manual instalation done for you.
    </p>
    <p> Here is the Cypht docker repository: <a href="https://hub.docker.com/r/cypht/cypht">https://hub.docker.com/r/cypht/cypht</a>
    <h3><b>Requirements</b></h3>
        <ul>
            <li><b>Docker Engine</b>: Ensure Docker is installed on your system. <a href="https://docs.docker.com/get-started/get-docker/">Get Docker</a>
            <li><b>Docker Compose</b>: Ensure Docker Compose is installed (it's often included with modern Docker Desktop installations). <a href="https://docs.docker.com/compose/install/">Install Docker Compose</a>
        </ul>
    <h3><b>Quick Start</b></h3>
    <p>Follow these steps to get a basic Cypht instance running</p>
    <ol>
        <li>
            Create a Project Directory
            <pre>mkdir cypht-docker&#10;cd cypht-docker</pre>
        </li>
        <li>
            Create a new file named "docker-compose.yml" or "docker-compose.yaml" in the directory you just created
        </li>
        <li>
            Copy and paste the content of <a href="https://github.com/cypht-org/cypht/blob/master/docker/docker-compose.yaml">https://github.com/cypht-org/cypht/blob/master/docker/docker-compose.yaml</a> in the created file.
        </li>
        <li>
            Open your CLI/Terminal and move to the directory containing the docker-compose file and run the command to run containers
            <pre>docker compose up -d</pre>
            If you are using the Legacy Standalone docker-compose you will run 
            <pre>docker-compose up -d</pre>

            <b>Important Note on docker-compose (Legacy Standalone Tool)</b><br>
            <p>You may have the older, standalone docker-compose (with a hyphen) tool installed. This legacy version can sometimes experience incompatibility with newer Docker Engine versions, leading to errors or unexpected behavior.</p>

            <p>If you encounter errors when using the legacy docker-compose command, your best course of action is to migrate to the modern docker compose plugin. This modern version is bundled and maintained as part of the Docker CLI itself, guaranteeing compatibility with your current Docker Engine installation. Migration is the recommended solution over troubleshooting compatibility issues with the deprecated Standalone Tool.</p>
        </li>
        <li>
            After containers started, you can access cypht on port 80 of your host if you didn't change the port value in the docker-compose file. Open your web browser and navigate to http://your-server-ip:80 or http://localhost:80.
        </li>
    </ol>
    <p>
        NOTE: Please change usernames (default: admin) and passwords (default: admin) before using the given docker-compose code in your production
        environment.
    </p>
    <h3 id="persisting-data"><b>Persisting Application Data</b></h3>
    <p>
        To ensure user configurations and email attachments are preserved across container restarts and updates, you must mount persistent volumes to the container. Update your cypht service in the docker-compose.yml file to include the volumes section:
        <pre>
cypht:
    image: cypht/cypht:2.4.2
    ports:
        - "80:80"
    environment:
        - AUTH_USERNAME=admin
        # ... other environment variables
    volumes:
        # Mount host directories for persistent storage
        - ./data/user_settings:/var/lib/hm3/users          # User profiles and settings
        - ./data/user_attachments:/var/lib/hm3/attachments # Email attachments
        </pre>
    </p>

        <h2>3. Install Cypht on a YunoHost server</h2>
        <p>This is an other easy way of installing and use Cypht.<br>
            YunoHost is an operating system that aims to simplify server administration as much as possible to
            democratize self-hosting while remaining reliable,
            secure, ethical and lightweight. It is a free software project owned exclusively by volunteers. Technically,
            it can be seen as a distribution based on
            Debian GNU/Linux and can be installed on many types of hardware.<br />
            To learn more about YunoHost, visit <a
                href="https://yunohost.org/en/whatsyunohost">https://yunohost.org/en/whatsyunohost</a>
        </p>
        <p>To install Cypht on YunoHost, please follow these steps:</p>
        <ul>
            <li>
                If you don't have an installed YunoHost server, please consult <a
                    href="https://yunohost.org/#/install">the guide</a> to learn how to install it. If you have it,
                please go directly to the next step.
            </li>
            <li>
                If you just installed YunoHost or had it installed before, access your server and go to the admin
                dashboard, then click on "Applications"
            </li>
            <li>In the next page, click on the "install" button</li>
            <li>In the search area, enter "cypht"</li>
            <li>In the search result, click on cypht app</li>
            <li>
                Scroll down, then fill in the form according to your need or keep the default values, then clik on the
                "install" button. Note: Make sure the url value is not
                used by another app on the server or in case you have another cypht instance previously installed you
                have to modify it instead of using the default valuue.
            </li>
            <li>Once clicked on the "install" button, wait for the installation to complete, it may take while.</li>
            <li>Once the installation completed, you will be taking back to the dashboard.</li>
            <li>
                To open the app, click on the app recently installed and then on the "open the app" button, then the
                application opens in a new tab.
            </li>
            <li>
                Enter the username and admin password you've provided previously in the installation form and then click
                on the login button to enter cypht and start configuring your email accounts.
            </li>
        </ul>

                <h2>4. Install Cypht within Tiki</h2>
        <p>If you have tiki installed, you can use Cypht within tiki. This is an easy way of installing Cypht.<br />
            Please follow the following link for a complete guide of how to install and use cypht within Tiki.</br>
            <a href="https://doc.tiki.org/Webmail">https://doc.tiki.org/Webmail</a>
        </p></br>
        <h4>Having problems?</h4>
        We are happy to help trouble-shoot any installation issues you run into. Chat with us at Gitter <a href="https://gitter.im/cypht-org/community">Cypht at Gitter</a> and We'll get back to you as soon as we can.

</section>

