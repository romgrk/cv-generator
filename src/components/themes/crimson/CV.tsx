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
      <div className='CV'>
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
        <div className='content'>
          <Sidebar />
          <Main />
        </div>
      </div>
    </section>
  );
}

function Sidebar() {
  const data = useData()
  return (
    <div className='sidebar'>

      <Skills />
      <Summary />
      <Contact className='flex-1' />

      <div className='sidebar__languages'>
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
    <div className='sidebar__skills'>
      {data.skills.map(skill =>
        <div className='skill' key={skill.name}>
          <div className='skill__name'>{skill.name}</div>
          <div className='skill__stars'>
            {Array(5).fill(0).map((_, index) =>
              <span className={cx('star', { active: index < (skill.value / 2) })}>
                <Icon name='Star' />
              </span>
            )}
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

function Contact({ className }) {
  const data = useData()
  return (
    <div className={cx('Contact', className, 'space-y-4')}>
      <div className='Contact__header'>
        Contact
      </div>
      {data.contact.map(entry =>
        <div className='flex flex-row Contact__item'>
          <div className='flex flex-col justify-start mr-4 text-md align-center opacity-60'>
            {entry.icon && <Icon name={entry.icon} />}
          </div>
          <div className='flex-1'>
            <div className='opacity-60 font-header Contact__label'>
              {entry.name}
            </div>
            <div className='font-text Contact__value'>
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
      <Experience />
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
          <div key={item.degree} className='education__item'>
            <div className='education__left'>
              <div className='education__degree'>{item.degree}</div>
              <div className='education__place'>{item.place}</div>
            </div>
            <div className='education__right'>
              <div className='education__date'>
                {item.date}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function Experience() {
  const data = useData()
  return (
    <div className='experience'>
      <div className='experience__header'>
        Experiences & Personal projects
      </div>
      <div className='experience__content space-y-1'>
        {data.experience.map(item =>
          <div key={item.name} className='experience__item'>
            <div className='experience__left'>
              <div className='experience__title'>
                {item.position &&
                  <div className='experience__position'>{item.position}</div>
                }
                <div className='flex flex-row align-center space-x-2'>
                  <span className='experience__name'>{item.name}</span>
                  {item.link &&
                    <a href={item.link} className='experience__link'>
                      {formatURL(item.link)}
                    </a>
                  }
                </div>
              </div>

              <div className='experience__details'>
                {item.details.map(line => <div key={line}>{line}</div>)}
              </div>

              <div className='experience__tags'>
                {item.tags.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
            <div className='experience__right'>
              <div className='experience__date'>
                {item.date}
              </div>
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
