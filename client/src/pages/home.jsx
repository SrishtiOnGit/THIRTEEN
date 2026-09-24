import Horror from "../components/horror.jsx";

const Home = () => {
  return (
    <div>
      <Horror
        label="Part - 1 : The Message"
        nextPage="/part2"
        text="At exactly 11:47 PM, Mira's laptop made a sound. Not the usual notification sound—a single, soft click. She looked up from her homework, but nothing seemed unusual. The room was quiet except for the ceiling fan and the rain tapping against the window. Her laptop screen was still showing the same page she'd been working on. Then she noticed a tiny notification in the corner: New message received.
Mira frowned. She wasn't expecting anything. She clicked it. There was no sender name, no profile picture, just one sentence: “You said you wanted to know what happens tomorrow.” Her fingers froze above the keyboard. Because she had said that. Earlier that evening. Out loud. Alone. She stared at the message for a few seconds, then typed, “Who are you?” The reply appeared immediately: “Someone who already knows.” Another message followed: “Don't open the door at 12:00.”
Mira glanced toward her bedroom door. Twelve o'clock was thirteen minutes away. Then came three quiet knocks. Knock. Knock. Knock. She stopped breathing. Her laptop screen suddenly went black. Beneath the dark screen, reflected faintly in the glass, Mira could see something standing behind her."
      />
    </div>
  );
};

export default Home;
