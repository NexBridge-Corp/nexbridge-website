import { useTranslation } from '../../hooks/useTranslation'

const Logo = ({ className = '' }) => {
  const t = useTranslation()

  return (
    <a href="#" className={`flex items-center justify-center gap-2 sm:gap-3 group hover:opacity-90 transition-opacity ${className}`}>
      <img
        src="/favicon.svg"
        alt="NexBridge Logo"
        className="h-9 sm:h-11 w-auto object-contain drop-shadow-sm flex-shrink-0"
      />
      <div className="flex flex-col items-center justify-center font-logo">
        <span className="text-[1.2rem] sm:text-[1.4rem] font-bold tracking-tight text-white leading-none">
          NexBridge
        </span>
        <span 
          className="text-[0.37rem] sm:text-[0.43rem] tracking-[0.06em] font-normal text-primary/80 mt-1 uppercase whitespace-nowrap text-center w-full max-w-[100%] overflow-hidden text-ellipsis"
          title={t.hero?.slogan || 'El puente hacia lo que sigue'}
        >
          {t.hero?.slogan || 'El puente hacia lo que sigue'}
        </span>
      </div>
    </a>
  )
}

export default Logo
