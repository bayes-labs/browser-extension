import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

import { i18n } from '~/core/languages';
import { useCurrentLanguageStore } from '~/core/state';
import { Box, Text } from '~/design-system';

export function Settings() {
  const { currentLanguage } = useCurrentLanguageStore();
  return (
    <Box
      as={motion.div}
      display="flex"
      flexDirection="column"
      gap="24px"
      padding="20px"
      initial={{ opacity: 0, x: window.innerWidth }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: window.innerWidth }}
      transition={{ type: 'tween', duration: 0.2 }}
    >
      <Text as="h1" size="20pt" weight="bold">
        Settings
      </Text>

      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text size="14pt" weight="bold">
          Language: {currentLanguage}
        </Text>
        <Box
          as="button"
          background="surfaceSecondary"
          padding="16px"
          style={{ borderRadius: 999 }}
          disabled
        >
          <Text color="labelSecondary" size="14pt" weight="bold">
            {i18n.t('label.toggle')} (disabled for now)
          </Text>
        </Box>
      </Box>

      <Link to="/">
        <Box
          as="button"
          background="surfaceSecondary"
          padding="16px"
          style={{ borderRadius: 999, width: '100%' }}
        >
          <Text color="labelSecondary" size="14pt" weight="bold">
            Home
          </Text>
        </Box>
      </Link>
    </Box>
  );
}