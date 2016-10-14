## SQL code for the Visitors Book project Database

```
-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  localhost
-- Généré le :  Ven 14 Octobre 2016 à 17:29
-- Version du serveur :  5.6.28
-- Version de PHP :  7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `visitors-book`
--

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `messages`
--

INSERT INTO `messages` (`id`, `content`, `created_at`) VALUES
(1, 'Merci', '2016-10-14 16:18:43'),
(2, 'Merciii', '2016-10-14 16:19:22'),
(3, 'Trop cool !', '2016-10-14 16:19:52'),
(4, 'Hello !', '2016-10-14 16:41:16');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
```
