import { Player } from "@lottiefiles/react-lottie-player";

export function PokeballLottie() {
  return (
    <div className="hero__pokeball-lottie" aria-hidden="true">
      <Player
        autoplay
        loop
        src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
        style={{ width: "130px", height: "130px" }}
      />
    </div>
  );
}
