import Link from 'next/link';
import styled from 'styled-components'

const ImageLogo = styled.img`
    margin-top: 80px;
    max-width: 400px;
    max-height:175px;
    cursor:pointer;
`;

type Logo = {
    Path: string,
    String: string,
    ClassLogo: string
}
function Logo({ Path, String,ClassLogo }: Logo) {
    return (
        <Link href="/">
            <ImageLogo className={ClassLogo} src={Path} alt={String} />
        </Link>
    );
};

export default Logo