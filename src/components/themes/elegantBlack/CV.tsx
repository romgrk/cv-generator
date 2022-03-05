import cx from 'clsx'
import isURL from 'is-url'
import isEmail from 'is-email'
import { useData } from '@src/hooks'
import Icon from '@src/components/Icon'

// NOTE: https://www.zipjob.com/blog/graphic-designer-use-creative-resume/

function CV() {
  const data = useData()
  require('./index.scss')

  return (
    <section className='sheet'>
      <div className='flex flex-row CV'>
        <Sidebar />
        <div className='flex flex-col flex-1 content'>
          <Header />
          <Main />
        </div>
      </div>
    </section>
  );
}

function Header() {
  const data = useData()
  return (
    <div className='header'>
      <div className='header__left'>
        <div className='header__name'>
          {data.name}
        </div>
        <div className='header__title'>
          {data.title}
        </div>
      </div>
      <div className='header__right'>
      </div>
    </div>
  )
}

function Sidebar() {
  return (
    <div className='sidebar'>

      <div className='sidebar__fill'/ >

      <Summary />
      <Contact />
      <Skills />
      <Languages />
    </div>
  )
}

function Languages() {
  const data = useData()
  return (
    <div className='languages'>
      <div className='languages__header'>
        Languages
      </div>
      <div className='languages__content'>
        {data.languages.map(lang =>
          <div className='language' key={lang.name}>
            <div className='language__name'>{lang.name}</div>
            <div className='language__level'>{lang.level}</div>
          </div>
        )}
      </div>
    </div>
  )
}

function Skills() {
  const data = useData()
  return (
    <div className='skills'>
      <div className='skills__header'>
        Skills
      </div>
      {data.skills.map(skill =>
        <div className='skill' key={skill.name}>
          <div className='skill__name'>{skill.name}</div>
          <div className='skill__level'>
            <div
              className='skill__level__value'
              style={{
                width: `${skill.value * 10 - 5}%`
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

function Summary() {
  const data = useData()
  return (
    <div className='mb-4 Summary'>
      <div className='Summary__header'>
        About
      </div>
      <div className='Summary__content'>
        {data.about}
      </div>
    </div>
  )
}

function Contact() {
  const data = useData()
  return (
    <div className='mb-4 Contact space-y-4'>
      <div className='Contact__header'>
        Contact
      </div>
      {data.contact.map(entry =>
        <div className='flex flex-row Contact__item'>
          <div className='flex flex-col justify-start mr-4 text-md align-center'>
            {entry.icon && <Icon name={entry.icon} />}
          </div>
          <div className='flex-1'>
            <div className='Contact__label'>
              {entry.name}
            </div>
            <div className='Contact__value'>
              {isURL(entry.value) ?
                <a href={entry.value}>{entry.value}</a> :
               isEmail(entry.value) ?
                <a href={`mailto:${entry.value}`}>{entry.value}</a> :
                entry.value
              }
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function Main() {
  const data = useData()
  return (
    <div className='main'>
      <Education />
      <Work />
    </div>
  )
}

function Work() {
  const data = useData()
  return (
    <div className='work'>
      <div className='work__header'>
        Experiences & Personal projects
      </div>
      <div className='work__content space-y-1'>
        {data.experience.concat(data.projects).map(item =>

          <div key={item.name} className='flex flex-row experience'>
            <div className='experience__date'>
              <Icon name='RegCircle' className='experience__date__icon' />
              {item.date}
            </div>
            <div className='flex-1 experience__content'>
              <div className='experience__title'>
                <div className='flex flex-row align-center space-x-1'>
                  <span className='experience__name'>{item.name}</span>
                  {item.link &&
                    <a href={item.link} className='experience__link'>
                      {formatURL(item.link)}
                    </a>
                  }
                </div>
                {item.position &&
                  <div className='experience__position'>{item.position}</div>
                }
              </div>

              <div className='experience__details'>
                {item.details.map(line => <div key={line}>{line}</div>)}
                <span className='experience__tags'>
                  {item.tags.map(t => <span key={t}>{t}</span>)}
                </span>
              </div>
            </div>
          </div>

        )}
      </div>
    </div>
  )
}

function Education() {
  const data = useData()
  return (
    <div className='education'>
      <div className='education__header'>
        Education
      </div>
      <div className='education__content'>
        {data.education.map(item =>

          <div key={item.degree} className='experience'>
            <div className='experience__date'>
              <Icon name='RegCircle' className='experience__date__icon' />
              {item.date}
            </div>
            <div className='experience__content'>
              <div className='experience__name'>{item.degree}</div>
              <div className='experience__position'>{item.place}</div>
            </div>
          </div>

        )}
      </div>
    </div>
  )
}

function formatURL(url) {
  return url
    .replaceAll('https://', '')
    .replaceAll('http://', '')
}

export default CV;
