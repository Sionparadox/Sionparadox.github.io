import { Button } from '@/components/atoms/Button';
import NoContentIcon from '@/components/atoms/NoContentIcon';
import { motion } from 'framer-motion';

function Test() {
  return (
    <div className="h-full w-full">
      <div className="flex gap-2">
        <Button onClick={() => alert('버튼 클릭')}>버튼</Button>
        <Button variant="ghost" onClick={() => alert('버튼 클릭')}>
          버튼
        </Button>
        <Button variant="link" onClick={() => alert('버튼 클릭')}>
          버튼
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <div className="min-h-5 w-full bg-gradient-to-r from-blue-500 to-red-500 pt-10" />
        <div className="min-h-5 w-full bg-[#2DD4BF] pt-10" />
        <div className="min-h-5 w-full bg-[#5EEAD4] pt-10" />
        <div className="min-h-5 w-full bg-[#14B8A6] pt-10" />
        <motion.div
          className="bg-gradient-to-r from-[#0D9488] via-[#2DD4BF] to-[#14B8A6] bg-clip-text pt-10 text-2xl text-transparent"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            backgroundSize: '300% 100%',
          }}
        >
          긴 텍스트를 넣어서 테스트를 해보는중
        </motion.div>
      </div>
      <div className="flex items-center justify-center">
        <NoContentIcon />
      </div>

      <div className="flex items-center justify-center">
        <motion.svg width="40" height="40" viewBox="0 0 40 40">
          <motion.circle
            cx="20"
            cy="20"
            r="18"
            fill="none"
            stroke="#2DD4BF"
            strokeWidth="4"
            strokeDasharray="113.1"
            strokeDashoffset="20"
            transform="rotate(-90 20 20)"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1,
              repeat: 1,
              ease: 'linear',
            }}
          />
        </motion.svg>
      </div>
    </div>
  );
}

export default Test;
