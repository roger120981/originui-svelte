/* eslint-disable perfectionist/sort-named-exports */

import Close from './drawer-close.svelte';
import Content from './drawer-content.svelte';
import Description from './drawer-description.svelte';
import Footer from './drawer-footer.svelte';
import Header from './drawer-header.svelte';
import Overlay from './drawer-overlay.svelte';
import Title from './drawer-title.svelte';
import Trigger from './drawer-trigger.svelte';
import Root from './drawer.svelte';

import { Drawer as DrawerPrimitive } from 'vaul-svelte';

const Portal: typeof DrawerPrimitive.Portal = DrawerPrimitive.Portal;

export {
	Root,
	Content,
	Description,
	Overlay,
	Footer,
	Header,
	Title,
	Trigger,
	Portal,
	Close,
	//
	Root as Drawer,
	Content as DrawerContent,
	Description as DrawerDescription,
	Overlay as DrawerOverlay,
	Footer as DrawerFooter,
	Header as DrawerHeader,
	Title as DrawerTitle,
	Trigger as DrawerTrigger,
	Portal as DrawerPortal,
	Close as DrawerClose
};