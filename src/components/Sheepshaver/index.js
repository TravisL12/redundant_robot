import React from "react";
import { getAsset } from "../utilities";

const AWS_BASE_URL = `https://smb4.s3.us-west-2.amazonaws.com`;
const WelcomeToMac = getAsset("/assets/sheepshaver/welcome-to-mac.jpg");
const BasiliskPreference = getAsset(
  "/assets/sheepshaver/basiliskPreference.jpg"
);

const SheepShaver = () => (
  <div className="sheepshaver">
    <div className="logo">
      <div className="image-container">
        <img src={WelcomeToMac} alt="Welcome to Mac" />
      </div>
    </div>

    <div className="text">
      <h4>Update September 27, 2021</h4>
      <p>
        In the first update in nearly 6 years I wanted to update my links. Since
        I introduced this tutorial in 2005 (wow!) I have recieved many emails
        and tweets from all over the world and I have enjoyed all of them. I'm
        still open for business and available to help when I can.{" "}
        <a href="https://twitter.com/travisl12">Let me know</a>.
      </p>
    </div>

    <div className="text">
      <h4>Basilisk II</h4>
      <p>
        Get Basilisk II (
        <a href="https://www.emaculation.com/forum/viewtopic.php?f=6&t=7361&sid=89e92b23a3a058811d74b286fe8fb2cd">
          Download)
        </a>
        . It also is likely that you need Basilisk II GUI (
        <a href="https://www.emaculation.com/forum/viewtopic.php?f=6&t=10454">
          Download
        </a>
        ).
      </p>
      <h4>SheepShaver</h4>
      <p>
        Get SheepShaver (
        <a href="http://www.emaculation.com/forum/viewtopic.php?f=20&t=7360">
          Download
        </a>
        )
      </p>
    </div>

    <div className="text">
      <h4>The Right ROM for the Right Emulator</h4>
      <p>
        If you're interested in running Mac OS System 1.0 to 8.1 you will want
        to use Basilisk II. Otherwise for Mac OS System 8.1+ you will want to
        use SheepShaver.
      </p>
    </div>

    <ul>
      <li>
        <a
          href={`${AWS_BASE_URL}/sheepshaver/apple_roms/mac_oldworld_rom4mb.rom.zip`}
        >
          Old World 4mb ROM
        </a>
      </li>
      <li>
        <a href={`${AWS_BASE_URL}/sheepshaver/apple_roms/newworld86.rom.zip`}>
          New World PPC ROM
        </a>{" "}
        (best for SheepShaver)
      </li>
      <li>
        <a href={`${AWS_BASE_URL}/sheepshaver/apple_roms/Apple2e.zip`}>
          Apple II ROM
        </a>
      </li>
      <li>
        <a href={`${AWS_BASE_URL}/sheepshaver/apple_roms/1mbMacrom.zip`}>
          Performa ROM
        </a>{" "}
        (I've experienced best Results with Basilisk II)
      </li>
      <li>
        <a href={`${AWS_BASE_URL}/sheepshaver/apple_roms/Quad650.zip`}>
          Quadra 650 ROM
        </a>
      </li>
      <li>
        <a href={`${AWS_BASE_URL}/sheepshaver/apple_roms/Quadra.zip`}>
          Quadra 900 ROM
        </a>
      </li>
      <li>
        <a href={`${AWS_BASE_URL}/sheepshaver/apple_roms/vmac.rom.zip`}>
          Mac Classic ROM
        </a>{" "}
        (Never gotten this to really work, but I'll include it)
      </li>
    </ul>

    <div className="text">
      <p>Sorry I had to remove the startup images.</p>
    </div>

    <div className="image-container">
      <img src={BasiliskPreference} alt="Basilisk Prefs" />
    </div>
  </div>
);

export default SheepShaver;
