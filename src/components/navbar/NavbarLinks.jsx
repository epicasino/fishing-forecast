export default function NavbarLinks({props}) {
  return (
    <a className="text-xl hover:underline" href={props.link}>
      {props.title}
    </a>
  );
}
