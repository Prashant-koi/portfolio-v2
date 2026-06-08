export default function AboutMe() {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-200 mb-6">
        About Me
      </h1>
      <div className="text-gray-300 leading-relaxed space-y-4">
        <p className="font-normal">
          Hey there! I'm Prasant, a Computer Science student who likes to work in large scale infra and systems engineering. Currently a Meta PE Fellow and former RA working with ML models, I'm also really interested in research in general.
        </p>
        <p className="font-normal">
          I've recently built Lavender, an open source distributed Linux EDR system with a Rust eBPF kernel module and Go-based detection workers.
        </p>
        <p className="font-normal">
          I LOVE doing hackathons and working with large scale infra, so hit me up on linkedin if you wanna team up for hackathons or any project really!!
        </p>
      </div>
    </div>
  );
}