import PartAvatar from '../PartAvatar'
import PartContent from '../PartContent'
import ConditionallyRender from '../ConditionallyRender'

const SecProfile = () => {
  return (
    <section
      id="profile"
      className="relative flex w-full flex-col bg-[#f8f6e7] md:flex-row md:items-stretch"
    >
      <ConditionallyRender client>
        <PartAvatar />
      </ConditionallyRender>
      <PartContent />
    </section>
  )
}

export default SecProfile
