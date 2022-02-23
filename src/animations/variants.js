const imageVariant = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delayChildren: 1
      }
    }
}

const navbarVariant = {
  hidden: {opacity: 0, height: '0%'},
  visible: {
    opacity: 1,
    height: '100%',
    transition: {
      type: 'tween',
      ease: 'easeInOut'
    }
  },
  exit: { 
    height: '0%',
    y: '-10vh',
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      when: 'afterChildren',
      staggerChildren: 0.2,
      staggerDirection: -1,
      duration: 0.5
    }
  }
}

const presentationVariant = {
  hidden: {opacity: 0, scale: 0},
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.5
    }
  }
}

const menuVariant = {
  hidden: {height: 0},
  visible: { 
    height: '100vh',
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      when: 'beforeChildren',
      staggerChildren: 0.2,
      duration: 0.5
    }
  },
  exit: { 
    height: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      when: 'afterChildren',
      staggerChildren: 0.2,
      staggerDirection: -1,
      duration: 0.5
    }
  }
}

const menuOptionsVariant = {
  hidden: {opacity: 0, scale: 0},
  visible: {
    opacity: 1, 
    scale: 1,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.5
    }
  },
  exit: {
    opacity: 0, 
    scale: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.5
    }
  }
}

const projectVariant = {
  hidden: {opacity: 0, y: 200, scale: 0},
  visible: {
    opacity: 1,
    y: 0,
    scale: 1, 
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.5
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.3
    }
  }
}

export {
  imageVariant,
  navbarVariant,
  presentationVariant,
  menuVariant,
  menuOptionsVariant,
  projectVariant
}