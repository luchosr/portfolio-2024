import profilePic from '../images/profilePic.webp';

export default function Header() {
  return (
    <header className="flex flex-row items-center  mx-auto mt-24">
      <div className="mt-2 flex-1 md:mt-0 w-1/2">
        <h1 className="text-3xl no-underline">Hey, I&#39;m Luciano.</h1>
        <p className="mt-3  text-muted-foreground w-3/4">
          I&#39;m a <span className="font-bold">React.js | Next.js</span>{' '}
          frontend developer based in Madrid, Spain. I&#39;m passionate about
          learning new technologies as <span className="font-bold">Rust</span>,
          and <span className="font-bold">TypeScript</span> and sharing
          knowledge with others.
        </p>
      </div>
      <div className="relative">
        <a
          href="https://www.linkedin.com/in/luciano-ramello-b45411143/"
          target="_blank"
        >
          <img
            className="flex-1 rounded-lg grayscale hover:grayscale-0 transition cursor-pointer"
            src={profilePic}
            alt="Luciano Ramello"
            width={150}
            height={175}
          />
        </a>
      </div>
    </header>
  );
}
