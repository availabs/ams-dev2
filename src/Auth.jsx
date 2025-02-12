//import Login from "./components/login"
// import { amsFactory } from "@availabs/ams"
import { amsFactory } from "./modules/ams/src"

const AuthConfig = {
  children: [
    { type: "ams-login" ,
      path: "login",
      props: { title: "ams-dev2" }
    },
    { ype: "ams-reset-password",
      path: "reset-password",
      props: { title: "ams-dev2" }
    },
    { type: "ams-logout",
      path: "logout",

    // @props.redirectTo
    // Optional prop. Defaults to "/".
    // Redirects user to URL after logging out.
      props: { redirectTo: "/" }
    },
    {
      type:"ams-messages",
      path:"messages"
    },
    { type: "ams-signup",
      path: "register",
      props: {
        title: "ams-dev2",
        addToGroup: "Users"
      }
    },
    { type: "ams-profile",
      path: "profile"
    },
    { type: "ams-verify-request" ,
      path: "verify-request"
    },
    // { type: "ams-verify-email",
    //   path: "verify-email"
    // },
    { type: "ams-set-password",
      path: "set-password"
    },
    { type: "ams-accept-invite",
      path: "accept-invite"
    },

    { type: "ams-project-management", path: "project-management",
    // @props.authLevel
    // Optional prop. This prop can be applied to any AMS child.
    // If set, users must have equal or higher authLevel to view this page.
      props: { authLevel: 5 }
    }
  ]
}


export default amsFactory(AuthConfig, "/auth")
