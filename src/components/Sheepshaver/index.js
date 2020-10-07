import React from 'react';

const WelcomeToMac = `${process.env.PUBLIC_URL}/assets/sheepshaver/welcome-to-mac.jpg`;
const BasiliskPreference = `${process.env.PUBLIC_URL}/assets/sheepshaver/basiliskPreference.jpg`;

const SheepShaver = () => (
  <div className="sheepshaver">
    <div className="logo">
      <div className="image-container">
        <img src={WelcomeToMac} alt="Welcome to Mac" />
      </div>
    </div>

    <div className="text">
      <h4>Update August 7, 2016</h4>
      <p>
        I've trimmed down this tutorial considerably to focus on what is most
        important. I feel that most of the tutorial was out of date with the
        docs for Basilisk or SheepShaver and so you're better looking there for
        guidance on how to get the apps running. Ultimately I feel the biggest
        help that I can provide here are the ROMs and disk images. But maybe I'm
        wrong, <a href="https://twitter.com/travisl12">let me know</a>.
      </p>
    </div>

    <div className="text">
      <h4>Getting Started</h4>
      <p>
        If you've downloaded{' '}
        <a href="http://basilisk.cebix.net/">Basilisk II</a> (
        <a href="http://www.emaculation.com/forum/viewtopic.php?f=6&t=7361&sid=89e92b23a3a058811d74b286fe8fb2cd">
          Download)
        </a>{' '}
        or <a href="http://sheepshaver.cebix.net/">SheepShaver</a> (
        <a href="http://www.emaculation.com/forum/viewtopic.php?f=20&t=7360">
          Download
        </a>
        ) you may be dreaming about Getting your old Mac Software up and running
        huh? But where to start? With your modern Mac you start opening up the
        Emulators and start getting to it only to realize that you need a few
        things don't you?
      </p>
    </div>

    <ul>
      <li>Emulator Software</li>
      <li>Old Mac OS (typically System 7 – System 9.0)</li>
      <li>A Startup Disk</li>
      <li>Create a Hard Drive Image</li>
      <li>An Old Mac ROM (which might sound confusing)</li>
      <li>A Way to get old Software onto your New Mac!</li>
    </ul>

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
        <a href="https://www.redundantrobot.com/sheepshaver_files/roms/mac_oldworld_rom4mb.rom.zip">
          Old World 4mb ROM
        </a>
      </li>
      <li>
        <a href="https://www.redundantrobot.com/sheepshaver_files/roms/newworld86.rom.zip">
          New World PPC ROM
        </a>{' '}
        (best for SheepShaver)
      </li>
      <li>
        <a href="https://www.redundantrobot.com/sheepshaver_files/roms/Apple2e.zip">
          Apple II ROM
        </a>
      </li>
      <li>
        <a href="https://www.redundantrobot.com/sheepshaver_files/roms/1mbMacrom.zip">
          Performa ROM
        </a>{' '}
        (I've experienced best Results with Basilisk II)
      </li>
      <li>
        <a href="https://www.redundantrobot.com/sheepshaver_files/roms/Quad650.zip">
          Quadra 650 ROM
        </a>
      </li>
      <li>
        <a href="https://www.redundantrobot.com/sheepshaver_files/roms/Quadra.zip">
          Quadra 900 ROM
        </a>
      </li>
      <li>
        <a href="https://www.redundantrobot.com/sheepshaver_files/roms/vmac.rom.zip">
          Mac Classic ROM
        </a>{' '}
        (Never gotten this to really work, but I'll include it)
      </li>
    </ul>

    <div className="text">
      <p>
        I'll save everyone some time with a bootable Mac OS 7 and 9 disk image.
      </p>
    </div>

    <ul>
      <li>
        <a href="https://www.redundantrobot.com/sheepshaver_files/disk_images/MacStartupOS7.img">
          MacStartupImage (30mb)
        </a>
      </li>
      <li>
        <a href="https://www.redundantrobot.com/sheepshaver_files/disk_images/OS9.img">
          Mac OS 9 Boot Image (120 megs)
        </a>{' '}
        (Bootable Image For SheepShaver! Download place in Volumes and hit
        Start!)
      </li>
    </ul>

    <div className="image-container">
      <img src={BasiliskPreference} alt="Basilisk Prefs" />
    </div>
  </div>
);

export default SheepShaver;
