import avatarImg from "../assets/future-trunks-long-hair.jpg";

export default function Avatar({ src = avatarImg, alt = "Avatar" }) {
    return (
        <img src={src} alt={alt} style={{ width: 140, borderRadius: "50%" }} />
    );
}