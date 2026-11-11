import Link from 'next/link';

export default function DiscoveryProject() {
  return (
    <main className="content-section discovery-feature">
      <Link href="/engineering#projects">← Engineering projects</Link>
      <header>
        <p>Georgia Tech · ECE 1100 · In progress</p>
        <h1>AI gesture-control glove</h1>
        <p>I want to control a laptop with a few movements of my wrist. The question behind my Discovery Project is whether a glove can recognize a deliberate command while ignoring all the other movements I make.</p>
      </header>
      <figure>
        <figcaption>Proposed signal path</figcaption>
        <ol><li>Hand motion</li><li>IMU readings</li><li>Gesture prediction</li><li>Laptop action</li></ol>
      </figure>
      <section>
        <h2>The problem</h2>
        <p>Advancing a slide is a useful first example because the action is simple and the result is immediately visible. During a presentation, though, I might also move my hands to point at the screen or emphasize a word. A glove that advances the slide every time my hand moves would be harder to use than a keyboard. That is why the idle state is part of my design from the start. Doing nothing is one of the decisions the system has to get right.</p>
      </section>
      <section>
        <h2>Building the glove</h2>
        <p>My proposed starting point is an Arduino Nano 33 BLE Sense Rev2 mounted to a glove or wrist strap. Its inertial measurement unit, or IMU, combines an accelerometer and a gyroscope. Together they provide a sequence of readings as my hand moves and rotates. Before assigning any gestures, I plan to check those readings over USB and see how they change when I bend or turn my wrist. That check gives me a way to investigate the hardware separately if recognition later breaks down.</p>
        <p>The mount matters because the sensor measures the movement of the board. If the board shifts on the strap between recordings, repeating the same hand movement could produce a different signal. I plan to use Georgia Tech’s Interdisciplinary Design Commons for assembly and prototyping. A printed wrist enclosure is an option once I know where the electronics fit comfortably and how I want to route power.</p>
      </section>
      <section>
        <h2>Teaching it the gestures</h2>
        <p>I plan to record my own examples of four or five gestures and label the recordings in Edge Impulse Studio. I’ll also record idle examples so that the classifier has an alternative to choosing a command. After training, I want to look at which movements it confuses. If two gestures produce similar wrist motion, changing one gesture and collecting fresh examples may be more useful than adjusting the model.</p>
        <p>The next step is to connect predictions to laptop commands over Bluetooth Low Energy. My proposed actions are advancing slides, switching tabs, scrolling, and playing or pausing media. I want to test each mapping individually before trying the glove through a sequence of tasks. That should help me distinguish a mistaken prediction from a correctly recognized gesture that triggers the wrong action.</p>
      </section>
      <section>
        <h2>What will count as a result?</h2>
        <p>My target is at least 80% accuracy in controlled testing, with four gestures and an idle state recognized in real time. That figure is a goal. Measured accuracy and a working demonstration are still pending. For the showcase, I plan to report the outcomes of repeated trials and describe which gestures were easiest to distinguish. Running inference on the glove itself and adding vibration feedback are stretch goals after the core interaction works.</p>
      </section>
    </main>
  );
}
