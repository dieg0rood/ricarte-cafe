import styled from 'styled-components'
import Link from 'next/link'

type DataLink = {
    LinkRedirect: string;
    NamePage: string;
}

const ButtonLink = styled.a`
font-size: 15px;
text-decoration:none;
cursor:pointer;
color:#D08339;
padding:10px;
border-radius:5px;
margin:10px 20px;
text-align:center;
&:hover {
    color:#D08339;
    border-bottom:solid 2px #D08339;
    border-top: solid 2px #D08339;
    transition: 0.2;
    }
`;


function NavLink({LinkRedirect, NamePage}: DataLink) {
    return (
        <>
            <Link href={LinkRedirect}>
                <ButtonLink>{NamePage}</ButtonLink>
            </Link>
        </>
    );
}


export default NavLink