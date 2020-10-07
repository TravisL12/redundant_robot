import styled from 'styled-components';

const mainDocMargin = '30px';
const headingColor = '#444';
const subHeadingColor = '#888';
const elementSpacing = '20px';
const thinBorderSeparator = '1px solid gray';
const thickBorderSeparator = '2px solid gray';
const paragraphLineHeight = '1.4';

export const ResumeContainer = styled.div`
  @page {
    size: letter portrait;
    margin: 0;
  }

  color: ${headingColor};
  background: #fdfff3;
  box-shadow: 0 0px 10px 0px rgba(0, 0, 0, 0.3);
  width: 8.5in;
  height: 11in;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
    Helvetica, Arial, 'Lucida Grande', sans-serif;

  p {
    margin: 0;
  }

  ul,
  ul li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .resume {
    display: flex;
    flex-direction: column;
    margin: 0 ${mainDocMargin};
    height: 100%;
  }

  .panel {
    margin: ${elementSpacing} 0;
    padding-bottom: ${elementSpacing};
    border-bottom: ${thinBorderSeparator};
    font-size: 14px;

    &:last-child {
      border: 0;
    }

    h1 {
      font-size: 20px;
      font-weight: 100;
    }
  }

  /* Header name */
  header {
    padding: ${mainDocMargin} 0 calc(${mainDocMargin} - 5px);
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .header-name {
    font-size: 50px;
    font-weight: 800;

    .name {
      text-transform: uppercase;
    }
  }

  .header-title {
    color: ${subHeadingColor};
  }

  .header-portfolio {
    font-size: 12px;
    line-height: 2.2;
    margin-top: 6px;

    li a {
      text-decoration: none;
      border: none;
      color: inherit;
    }
  }

  .icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .github-icon {
    background: url('${process.env
        .PUBLIC_URL}/assets/resume/GitHub-Mark-32px.png')
      no-repeat center center;
    background-size: contain;
  }

  .codepen-icon {
    background: url('${process.env
        .PUBLIC_URL}/assets/resume/Button-Black-Large.png')
      no-repeat center center;
    background-size: contain;
  }

  .web-icon {
    background: url('${process.env
        .PUBLIC_URL}/assets/resume/world-wide-web.png')
      no-repeat center center;
    background-size: contain;
  }

  /* show experince and my mission */
  .body {
    display: flex;
    flex: 1;
    border-top: ${thickBorderSeparator};
    margin-bottom: ${mainDocMargin};
  }

  .body-mission p {
    margin: 10px 0;
    line-height: ${paragraphLineHeight};
  }

  /* Left side */
  .left-panel {
    width: 2.5in;
    border-right: ${thickBorderSeparator};

    .panel {
      margin-right: ${elementSpacing};
    }
  }

  .skill-set ul li {
    text-transform: uppercase;
    line-height: 1.8;
  }

  .contact ul li {
    line-height: ${paragraphLineHeight};
  }

  /* Education */
  .education p {
    line-height: ${paragraphLineHeight};

    .year,
    .location {
      color: ${subHeadingColor};
    }
  }

  .education-item + .education-item {
    margin-top: ${elementSpacing};
  }

  /* Right side */
  .right-panel {
    flex: 1;

    .panel {
      margin-left: ${elementSpacing};
    }
  }

  /* Experience */
  .experience + .experience {
    padding-top: 20px;
  }

  .experience {
    .company,
    .title {
      margin-bottom: 5px;
    }

    .company {
      font-size: 18px;
    }

    .title {
      color: ${subHeadingColor};
    }

    .description {
      line-height: ${paragraphLineHeight};
    }
  }
`;
