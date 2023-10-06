import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonSizes, ButtonTheme } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Button',
  component: Button
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Clear: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.CLEAR
  }
}
export const ClearSizeM: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
    size: ButtonSizes.M
  }
}
export const ClearSizeL: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
    size: ButtonSizes.L

  }
}
export const ClearSizeXL: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
    size: ButtonSizes.XL
  }
}
export const ClearDark: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.CLEAR
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const ClearDarkSizeM: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
    size: ButtonSizes.M
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
export const ClearDarkSizeL: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
    size: ButtonSizes.L
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
export const ClearDarkSizeXL: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
    size: ButtonSizes.XL
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const ClearInverted: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.CLEAR_INVERTED
  }
}
export const ClearInvertedSizeM: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.CLEAR_INVERTED,
    size: ButtonSizes.M
  }
}
export const ClearInvertedSizeL: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.CLEAR_INVERTED,
    size: ButtonSizes.L

  }
}
export const ClearInvertedSizeXL: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.CLEAR_INVERTED,
    size: ButtonSizes.XL
  }
}
export const ClearInvertedDark: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.CLEAR_INVERTED
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const ClearInvertedDarkSizeM: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.CLEAR_INVERTED,
    size: ButtonSizes.M
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
export const ClearInvertedDarkSizeL: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.CLEAR_INVERTED,
    size: ButtonSizes.L
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
export const ClearInvertedDarkSizeXL: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.CLEAR_INVERTED,
    size: ButtonSizes.XL
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Outline: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.OUTLINE
  }
}
export const OutlineSizeM: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSizes.M
  }
}
export const OutlineSizeL: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSizes.L
  }
}
export const OutlineSizeXL: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSizes.XL
  }
}
export const OutlineDark: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.OUTLINE
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const OutlineDarkSizeM: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSizes.M
  },
  decorators: [ThemeDecorator(Theme.DARK)]

}
export const OutlineDarkSizeL: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSizes.L
  },
  decorators: [ThemeDecorator(Theme.DARK)]

}
export const OutlineDarkSizeXL: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSizes.XL
  },
  decorators: [ThemeDecorator(Theme.DARK)]

}

export const BackgroundInverted: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND_INVERTED
  }
}

export const BackgroundInvertedSizeM: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSizes.M
  }
}

export const BackgroundInvertedSizeL: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSizes.L
  }
}
export const BackgroundInvertedSizeXL: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSizes.XL
  }
}
export const BackgroundInvertedDark: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND_INVERTED
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const BackgroundInvertedDarkSizeM: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSizes.M

  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const BackgroundInvertedDarkSizeL: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSizes.L

  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const BackgroundInvertedDarkSizeXL: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSizes.XL

  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Square: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true
  }
}

export const SquareSizeM: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSizes.M
  }
}

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSizes.L

  }
}

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSizes.XL
  }
}

export const SquareDark: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
export const SquareDarkSizeM: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSizes.M
  },
  decorators: [ThemeDecorator(Theme.DARK)]

}

export const SquareDarkSizeL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSizes.L

  },
  decorators: [ThemeDecorator(Theme.DARK)]

}

export const SquareDarkSizeXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSizes.XL
  },
  decorators: [ThemeDecorator(Theme.DARK)]

}
