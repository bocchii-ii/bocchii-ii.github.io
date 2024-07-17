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

function App() {

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

  return (
    <>
      <Box id="profile-info">
        <Typography sx={{textAlign: 'center'}} variant="h3">
          About Me
        </Typography>
        <Box sx={{background: 'rgba(0,0,0,.8)', color: 'white', p: 2, borderRadius: '5px', boxShadow: '1px 2px 2px black', maxWidth: '700px', mx:'auto'}}>
          <Typography color="inherit">
            I'm <Typography component="span" color="secondary.light" >Bocchii-ii</Typography>, a Software Engineer since 2019. Building, repairing and developing modern applications using various frameworks and programming languages.
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
    </>
  )
}

export default App
