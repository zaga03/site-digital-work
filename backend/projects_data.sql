--
-- PostgreSQL database dump
--

\restrict pgwTzlq7ocuuKf9vlormh2ouagwctixE3XgsfQViELAEwHkQOceWWeEXzF33PTl

-- Dumped from database version 17.10
-- Dumped by pg_dump version 17.10

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.projects (id, title, short_title, description, details, category, image_url, technologies, benefits, project_url, demo_url, featured, status, created_at, updated_at, published) FROM stdin;
16cd6adc-541f-4372-8662-5d910ed4b33f	Hotspot Management V2	Hotspot Management	Plateforme de gestion centralisée pour les infrastructures hotspot.	Gestion des routeurs, utilisateurs, sessions et vouchers.	Administration du Réseau	/uploads/projects/1787815360522-couverture-wifimahavoky.png	["React", "TypeScript", "Node.js", "PostgreSQL", "MikroTik"]	["géstion de ticket", "gestion centralisé", "géré à distance"]	\N	https://hotspotmanager.com	t	completed	2026-08-26 10:38:04.578097+03	2026-08-27 10:22:58.338473+03	t
66d39dc3-51e7-4e25-a379-75054d073337	Digital Work	Digital Work	Site vitrine professionnel pour présenter les services et réalisations de Digital Work	\N	Développement Web	/uploads/projects/1787815455732-logo-dig-official-2.png	["React", "typeScript", "Vite", "Tailwind CSS", "Frame Motion"]	["Présentation professionnelle des services", "Design responsive et moderne", "Gestion dynamique des réalisations", "Optimisation de l'expérience utilisateur"]	\N	\N	t	in-progress	2026-08-26 21:53:43.488671+03	2026-08-27 10:24:30.543262+03	t
4300e36b-1bdb-4781-9882-3ac7b144c56c	Hotspot Management V2	Hotspot Management	Plateforme web complŠte de gestion des r‚seaux WiFi Hotspot et des ‚quipements MikroTik.	Application d‚velopp‚e pour centraliser la gestion des routeurs MikroTik, des points d'accŠs, des utilisateurs, des sessions et des vouchers. La plateforme permet ‚galement de suivre les connexions et d'administrer les diff‚rents sites depuis une interface moderne.	Réseau & Infrastructure	\N	["React", "TypeScript", "Node.js", "PostgreSQL", "MikroTik", "Tailwind CSS"]	["Gestion centralis‚e des r‚seaux WiFi", "Administration des routeurs MikroTik", "Gestion des vouchers et des utilisateurs", "Suivi des sessions et des connexions", "Interface d'administration moderne"]	\N	\N	t	in-progress	2026-08-27 12:09:12.713085+03	2026-08-27 12:19:01.879616+03	t
983abdf0-5deb-4eb9-9245-2ed91aada404	E-immatricule	matricule	site communale urbaine de mahajanga	contrubution regionale	Développement Web	/uploads/projects/1787815119924-images.jpg	["react", "Node.js", "typescript", "tailwid css"]	["interface fluide", "interface  responsive", "filtre repondu"]	\N	\N	f	completed	2026-08-27 10:10:04.570877+03	2026-08-27 10:20:47.384943+03	t
d7896076-0629-4b31-aeae-90ce4d25e5a8	Site Web Hôtel Tropicana	Hôtel Tropicana	Création d'une plateforme web moderne pour améliorer la visibilité digitale de l'hôtel, présenter les chambres et services, et faciliter la prise de contact avec les clients.	Digital Work a conçu une solution web responsive et moderne permettant à l'établissement de présenter son identité, ses chambres, son restaurant et ses services. Le site est optimisé pour mobile, tablette et ordinateur afin d'offrir une expérience utilisateur fluide.\n\nLa plateforme permet également de mettre en avant les offres de l'hôtel, les informations pratiques, la localisation et les différents moyens de contact. L'objectif est d'améliorer la présence numérique de l'établissement et de convertir les visiteurs en clients.	Développement Web	\N	["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgresSQL"]	["Meilleure visibilité en ligne", "Design responsive", "Présentation professionnelle des services", "Optimisation de l'expérience utilisateur", "Facilitation de la prise de contact"]	\N	\N	f	completed	2026-08-27 10:45:13.432741+03	2026-08-27 10:45:13.432741+03	t
4e411e36-a21b-4427-902c-dd896a425f27	SmartStock Mobile	Gestion de stock mobile	Développement d'une application mobile moderne permettant aux petites entreprises de gérer leurs produits, leurs stocks et leurs mouvements de marchandises directement depuis un smartphone.	SmartStock Mobile est une application conçue pour simplifier la gestion quotidienne des stocks.\n\nL'application permet d'ajouter et de modifier les produits, consulter les quantités disponibles, enregistrer les entrées et sorties de marchandises et suivre l'évolution du stock.\n\nL'interface a été pensée pour être rapide et intuitive afin de permettre aux utilisateurs de gérer leurs opérations directement depuis leur téléphone.\n\nLa solution peut également être connectée à une API backend afin de synchroniser les données entre plusieurs utilisateurs et appareils.	Application Mobile	\N	["React Native", "TypeScript", "Expo", "Node.js", "PostgreSQL"]	["Gestion des produits", "Suivi des stocks", "Gestion des entrées et sorties", "Interface mobile intuitive", "Synchronisation avec une API"]	\N	\N	f	completed	2026-08-27 11:01:53.359832+03	2026-08-27 11:01:53.359832+03	t
\.


--
-- PostgreSQL database dump complete
--

\unrestrict pgwTzlq7ocuuKf9vlormh2ouagwctixE3XgsfQViELAEwHkQOceWWeEXzF33PTl

