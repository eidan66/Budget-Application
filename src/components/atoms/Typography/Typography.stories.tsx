/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react';
import { Typography } from '.';

export default {
  title: 'components/atoms/Typography',
  component: Typography,
};

export const ExtraSmallText = (args) => <Typography.ExtraSmallText {...args} />;
ExtraSmallText.args = {
  children: 'Extra Small Text',
};

export const SmallTextSub1 = (args) => <Typography.SmallText {...args} />;
SmallTextSub1.args = {
  children: ' Small Text Subtitle1',
  variant: 'subtitle1',
};
export const SmallTextSub2 = (args) => <Typography.SmallText {...args} />;
SmallTextSub2.args = {
  children: ' Small Text Subtitle2',
  variant: 'subtitle2',
};

export const MediumText = (args) => <Typography.MediumText {...args} />;
MediumText.args = {
  children: 'Medium Text',
};

export const LargeText = (args) => <Typography.LargeText {...args} />;
LargeText.args = {
  children: 'Large Text',
};

export const UppercaseText = (args) => <Typography.UppercaseText {...args} />;
UppercaseText.args = {
  children: 'Uppercase Text',
};

export const SubtitleText = (args) => <Typography.SubtitleText {...args} />;
SubtitleText.args = {
  children: 'Subtitle Text',
};
