import reactLogo from './assets/react.svg'
import jsLogo from './assets/javascript.svg'
import laravelLogo from './assets/laravel-2.svg'
import javaLogo from './assets/java-4.svg'
import mariaDBLogo from './assets/mariadb.svg'
import pythonLogo from './assets/python-5.svg'
import csharpLogo from './assets/csharp.svg'
import cppLogo from './assets/cpp.svg'
import phpLogo from './assets/php.svg'
import dotnetLogo from './assets/dotnet.svg'
import vueLogo from './assets/vue-9.svg'
import nestLogo from './assets/nestjs.svg'
import figmaLogo from './assets/figma.svg'
import aiLogo from './assets/ai.svg'
import gsapLogo from './assets/gsap.svg'
import electronLogo from './assets/electron.svg'
import { Box, Typography } from '@mui/material'
import Proficiency from './components/Proficiency'
import DOTS from 'vanta/dist/vanta.dots.min'
import { useEffect, useState } from 'react'
import waves from './assets/wavesOpacity.svg'

function App() {
  const [vantaEffect, setVantaEffect] = useState()

  const proficiencies = [
    {
      icon: jsLogo,
      text: "JavaScript"
    },
    {
      icon: phpLogo,
      text: "PHP"
    },
    {
      icon: reactLogo,
      text: "ReactJS"
    },
    {
      icon: vueLogo,
      text: "VueJS"
    },
    {
      icon: laravelLogo,
      text: "Laravel"
    },
    {
      icon: javaLogo,
      text: "Java"
    },
    {
      icon: mariaDBLogo,
      text: "MariaDB"
    },
    {
      icon: pythonLogo,
      text: "Python"
    },
    {
      icon: csharpLogo,
      text: "C#"
    },
    {
      icon: cppLogo,
      text: "C++"
    },
    {
      icon: dotnetLogo,
      text: ".Net"
    },
  ]

  const learnings = [
    {
      icon: nestLogo,
      text: "NestJS"
    },
    {
      icon: figmaLogo,
      text: "Figma"
    },
    {
      icon: aiLogo,
      text: "Adobe Illustrator"
    },
    {
      icon: gsapLogo,
      text: "GSAP"
    },
    {
      icon: reactLogo,
      text: "React Native"
    },
    {
      icon: electronLogo,
      text: "Electron"
    },
  ]

  useEffect(() => {
    if(!vantaEffect){
      setVantaEffect(DOTS({
        el: document.getElementById("profile-info"),
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xff207b,
        color2: 0xff20ca
      }))
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <>
      <Box id="profile-info" sx={{minHeight: '100vh'}}>
        <Box sx={{pt: 20}}>
          <Typography sx={{textAlign: 'center', color:  'white', mb: 2}} variant="h3">
            About Me
          </Typography>
          <Box sx={{background: 'rgba(0,0,0,.8)', color: 'white', p: 2, borderRadius: '5px', boxShadow: '1px 2px 2px black', maxWidth: '700px', mx:'auto'}}>
            <Typography color="inherit">
              I'm <Typography component="span" color="secondary.light" >Bocchii-ii</Typography>, a software engineer since 2019. Building, repairing and developing modern applications using various frameworks and programming languages.
            </Typography>

            <Typography sx={{mt: 1}} color="inherit">
              I have experience in API development using Laravel and .NET Framework, build SPA with ReactJS and VueJS, and desktop applications using Electron.
            </Typography>

            <Typography sx={{mt: 1}} color="inherit">
              I specialize in creating tools to solve common problems or to help automate certain tasks.
              I'm currently teaching students in MFI Polytechnic Institute Inc. to further enhance my communication skills.
            </Typography>
            <Box sx={{display: 'flex', gap: 2, flexWrap: 'wrap'}}>
              <Box sx={{flex:1, mt: 1, p: 2, backdropFilter: 'blur(5px)', background: 'rgba(200,200,200,.1)', borderRadius: '5px', minWidth: '300px'}}>
                <Typography variant="h5" color="secondary.light" sx={{mb: 2}}>Proficient in</Typography>
                {proficiencies.map(proficiency => (
                  <Proficiency sx={{mt: .2}} key={proficiency.text} icon={proficiency.icon} text={proficiency.text} />
                ))}
              </Box>
              <Box sx={{flex:1, mt: 1, p: 2, backdropFilter: 'blur(5px)', background: 'rgba(200,200,200,.1)', borderRadius: '5px', minWidth: '300px'}}>
                <Typography variant="h5" color="secondary.light" sx={{mb: 2}}>Learning</Typography>
                {learnings.map(proficiency => (
                  <Proficiency sx={{mt: .2}} key={proficiency.text} icon={proficiency.icon} text={proficiency.text} />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <Box sx={{background: `linear-gradient(120deg, rgba(138,8,95,1) 0%, rgba(172,79,3,1) 100%)`}}>
        <Box sx={{background: `url('${waves}')`, height: '100px', backgroundSize: 'cover'}} />
        <Typography variant="h3" align="center" sx={{color: "white", mt: 2}}>
          My Projects
        </Typography>
      </Box> */}
    </>
  )
}

export default App
