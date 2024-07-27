import React from "react"
// eslint-disable-next-line react/prop-types
const Header = React.memo(function Header({ title }) {
    return <div>
        My name is {title}
    </div>
})
export default Header