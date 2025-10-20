const menus=[

      {
            label:"App Config",
            href:"#app-config",
            children:[
                  {
                        label:"Auth",
                        href:"#auth"
                  },
                  {
                        label:"Session",
                        href:"#session"
                  },
                  {
                        label:"SMTP",
                        href:"#smtp"
                  },
                  {
                        label:"Security",
                        href:"#security"
                  }
            ]
      },{
            label:"Database",
            href:"#database",
            children:[]
      },
      {
            label:"2FA",
            href:"#2fa",
            children:[]
      },
      {
            label:"Dynamic Login",
            href:"#dynamic-login",
            children:[]
      },
      {
            label:"Github",
            href:"#github",
            children:[]
      },
      {
            label:"LDAP",
            href:"#ldap",
            children:[]
      },
      {
            label:"OAuth2",
            href:"#oauth2",
            children:[]
      },
      {
            label:"Recaptcha",
            href:"#recaptcha",
            children:[]
      },
      {
            label:"Wordpress",
            href:"#wordpress",
            children:[]
      }
]

document.addEventListener("DOMContentLoaded", function() {

      const config_menu= document.querySelector(".config-generator-list")
      
      config_menu.innerHTML=""
      
})