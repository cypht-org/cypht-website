---
title: License
weight: 25
css: /assets/doc/license.css
---

<!-- Hero Section -->
<section class="license-hero">
  <div class="license-hero-content">
    <div class="license-header">
      <div class="mb-2">
        <span class="chip">📄 Open Source License</span>
      </div>
      <h1 class="license-title">
        Cypht License & Dependencies
      </h1>
    </div>
    <p class="license-subtitle">
      Cypht is distributed under the LGPL V2.1 license and will always remain free and open source. 
      Learn about our licensing terms and the third-party libraries we use.
    </p>
    <div class="license-buttons">
      <a href="https://github.com/cypht-org/cypht/blob/master/LICENSE" class="btn btn-dark" target="_blank" rel="noopener">
        View Full License
      </a>
      <a href="#libraries" class="btn btn-light">
        View Dependencies
      </a>
    </div>
  </div>
</section>
<!--  -->
<section class="license-content">
  <div class="license-container">
    <!-- <div class="text-left lc-header">
      <h2>Cypht source code is distributed under the LGPL V2.1 license</h2>
      <p>
        Cypht will always be both free and Open Source. Cypht uses a handful of third party libraries both indirectly
        and directly. Compatible version of direct dependencies are always included in the Cypht source or installed via
        PHP composer.
      </p>
    </div> -->

    <div class="license-info mb-4">
      <h2>Cypht source code is distributed under the LGPL V2.1 license</h2>
      <p>
        Cypht will always be both free and Open Source. Cypht uses a handful of third party libraries both indirectly
        and directly. Compatible version of direct dependencies are always included in the Cypht source or installed via
        PHP composer.
      </p>
    </div>

    <ul class="lc-list mb-5">
      <li class="">
        <div class="lc-item-conetent">
          <div class="ls-item-header">
            <div> <div class="ls-item-header-card"> <img src="/img/folder_2.png"/> </div></div>
            <div>
              <h3>Directly Used Libraries</h3>
              <p class="w-50">These libraries are directly integrated into Cypht and are essential for core functionality.</p>
            </div>
          </div>
          <!--  -->
          <div class="line-top-indicator"></div>
          <div class="libraries-grid">
            <div class="library-card">
              <div class="library-name">HTMLPurifier</div>
              <div class="library-description">Un filtre HTML complet écrit en PHP qui supprime le code malveillant tout en préservant le balisage valide. Essentiel pour la sécurité des emails.</div>
              <div class="library-footer">
                <a href="http://htmlpurifier.org/" class="library-btn secondary" target="_blank" rel="noopener">
                  Visiter le site
                  <i class="bi bi-arrow-right-short library-btn-icon"></i>
                </a>
              </div>
            </div>

            <div class="library-card">
              <div class="library-name">Cash</div>
              <div class="library-description">Une bibliothèque JavaScript compacte compatible avec jQuery qui fournit les fonctionnalités essentielles de manipulation DOM et de gestion d'événements.</div>
              <div class="library-footer">
                <a href="http://kenwheeler.github.io/cash/" class="library-btn secondary" target="_blank" rel="noopener">
                  Documentation
                  <i class="bi bi-arrow-right-short library-btn-icon"></i>
                </a>
              </div>
            </div>

            <div class="library-card">
              <div class="library-name">Html2Text</div>
              <div class="library-description">Convertisseur HTML vers texte en PHP qui extrait le contenu textuel des emails HTML pour une meilleure compatibilité et lisibilité.</div>
              <div class="library-footer">
                <a href="https://github.com/mtibben/html2text" class="library-btn secondary" target="_blank" rel="noopener">
                  GitHub Repository
                  <i class="bi bi-arrow-right-short library-btn-icon"></i>
                </a>
              </div>
            </div>

            <div class="library-card">
              <div class="library-name">KindEditor</div>
              <div class="library-description">Éditeur WYSIWYG JavaScript léger pour composer des messages HTML avec des fonctionnalités d'édition de texte riche intégrées.</div>
              <div class="library-footer">
                <a href="http://kindeditor.net/demo.php" class="library-btn secondary" target="_blank" rel="noopener">
                  Voir la démo
                  <i class="bi bi-arrow-right-short library-btn-icon"></i>
                </a>
              </div>
            </div>

            <div class="library-card">
              <div class="library-name">Forge</div>
              <div class="library-description">Bibliothèque de cryptographie JavaScript fournissant des capacités de chiffrement sécurisé, de signatures numériques et de génération de clés.</div>
              <div class="library-footer">
                <a href="https://github.com/digitalbazaar/forge" class="library-btn secondary" target="_blank" rel="noopener">
                  GitHub Repository
                  <i class="bi bi-arrow-right-short library-btn-icon"></i>
                </a>
              </div>
            </div>

            <div class="library-card">
              <div class="library-name">Random Compat</div>
              <div class="library-description">Bibliothèque de génération de nombres aléatoires cryptographiquement sécurisés pour PHP, garantissant la sécurité des opérations sensibles.</div>
              <div class="library-footer">
                <a href="https://github.com/paragonie/random_compat" class="library-btn outline" target="_blank" rel="noopener">
                  GitHub Repository
                  <i class="bi bi-arrow-right-short library-btn-icon"></i>
                </a>
              </div>
            </div>

            <div class="library-card">
              <div class="library-name">Base32</div>
              <div class="library-description">Bibliothèque d'encodage Base32 utilisée par le module d'authentification à deux facteurs (2FA) pour générer des codes QR sécurisés.</div>
              <div class="library-footer">
                <a href="https://github.com/ChristianRiesen/base32" class="library-btn secondary" target="_blank" rel="noopener">
                  GitHub Repository
                  <i class="bi bi-arrow-right-short library-btn-icon"></i>
                </a>
              </div>
            </div>

            <div class="library-card">
              <div class="library-name">Barcode</div>
              <div class="library-description">Générateur de codes QR en PNG avec PHP, utilisé par le module 2FA pour créer des codes d'authentification visuels sécurisés.</div>
              <div class="library-footer">
                <a href="https://github.com/codeitnowin/barcode-generator" class="library-btn secondary" target="_blank" rel="noopener">
                  GitHub Repository
                  <i class="bi bi-arrow-right-short library-btn-icon"></i>
                </a>
              </div>
            </div>

            <div class="library-card">
              <div class="library-name">Libsodium</div>
              <div class="library-description">Bibliothèque de cryptographie compatible NIST (optionnelle) offrant des algorithmes de chiffrement modernes et sécurisés pour les opérations sensibles.</div>
              <div class="library-footer">
                <a href="https://download.libsodium.org/doc/" class="library-btn outline" target="_blank" rel="noopener">
                  Documentation
                  <i class="bi bi-arrow-right-short library-btn-icon"></i>
                </a>
              </div>
            </div>

            <div class="library-card">
              <div class="library-name">Push</div>
              <div class="library-description">Bibliothèque JavaScript pour des notifications de bureau faciles, utilisée par le module de notifications pour informer l'utilisateur des nouveaux emails.</div>
              <div class="library-footer">
                <a href="https://pushjs.org/" class="library-btn secondary" target="_blank" rel="noopener">
                  Visiter le site
                  <i class="bi bi-arrow-right-short library-btn-icon"></i>
                </a>
              </div>
            </div>

            <div class="library-card">
              <div class="library-name">Editor</div>
              <div class="library-description">Éditeur Markdown JavaScript pour composer des messages avec une interface utilisateur moderne et des fonctionnalités d'édition avancées.</div>
              <div class="library-footer">
                <a href="https://lepture.com/" class="library-btn secondary" target="_blank" rel="noopener">
                  Visiter le site
                  <i class="bi bi-arrow-right-short library-btn-icon"></i>
                </a>
              </div>
            </div>

            <div class="library-card">
              <div class="library-name">Parsedown</div>
              <div class="library-description">Bibliothèque PHP pour convertir le Markdown en HTML, permettant de formater les messages et la documentation avec une syntaxe simple et lisible.</div>
              <div class="library-footer">
                <a href="http://parsedown.org/" class="library-btn outline" target="_blank" rel="noopener">
                  Visiter le site
                  <i class="bi bi-arrow-right-short library-btn-icon"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="line-bottom-indicator"></div>
        </div>
      </li>
      <!-- item 2 -->
      <li class="">
        <div class="lc-item-conetent">
          <div class="ls-item-header">
            <div> <div class="ls-item-header-card"> <img src="/img/folder_2.png"/> </div></div>
            <div>
              <h3>Indirectly Used Libraries</h3>
              <p class="w-50">These libraries are directly integrated into Cypht and are essential for core functionality.</p>
            </div>
          </div>
          <!--  -->
          <div class="line-top-indicator"></div>
          <div class="libraries-grid">
            <div class="library-card">
              <div class="library-name">HTMLPurifier</div>
              <div class="library-description">Un filtre HTML complet écrit en PHP qui supprime le code malveillant tout en préservant le balisage valide. Essentiel pour la sécurité des emails.</div>
              <div class="library-footer">
                <a href="http://htmlpurifier.org/" class="library-btn secondary" target="_blank" rel="noopener">
                  Visiter le site
                  <i class="bi bi-arrow-right-short library-btn-icon"></i>
                </a>
              </div>
            </div>

            <div class="library-card">
              <div class="library-name">Cash</div>
              <div class="library-description">Une bibliothèque JavaScript compacte compatible avec jQuery qui fournit les fonctionnalités essentielles de manipulation DOM et de gestion d'événements.</div>
              <div class="library-footer">
                <a href="http://kenwheeler.github.io/cash/" class="library-btn secondary" target="_blank" rel="noopener">
                  Documentation
                  <i class="bi bi-arrow-right-short library-btn-icon"></i>
                </a>
              </div>
            </div>

            <div class="library-card">
              <div class="library-name">Html2Text</div>
              <div class="library-description">Convertisseur HTML vers texte en PHP qui extrait le contenu textuel des emails HTML pour une meilleure compatibilité et lisibilité.</div>
              <div class="library-footer">
                <a href="https://github.com/mtibben/html2text" class="library-btn secondary" target="_blank" rel="noopener">
                  GitHub Repository
                  <i class="bi bi-arrow-right-short library-btn-icon"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="line-bottom-indicator"></div>
        </div>
      </li>
    </ul>

  </div>
</section>
